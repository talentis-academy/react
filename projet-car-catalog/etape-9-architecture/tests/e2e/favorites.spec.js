import { test, expect } from '@playwright/test';

test.describe('Favorites Feature', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authentication in localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('auth_token', 'test-token-123');
      localStorage.setItem('auth_user', JSON.stringify({
        userName: 'Test User',
        password: 'test',
        verified: true,
        blocked: false,
      }));
    });
    
    // Visit the home page
    await page.goto('/');
    
    // Wait for cars to load - use heading role to be more specific
    await expect(page.getByRole('heading', { name: 'Car Catalog' })).toBeVisible();
    await expect(page.locator('.car-card').first()).toBeVisible({ timeout: 10000 });
  });

  test('should add a car to favorites when clicking favorite button', async ({ page }) => {
    // Click the first favorite button
    const firstCard = page.locator('.car-card').first();
    await firstCard.locator('.favorite-btn').click();
    
    // Check if the button has the active class
    await expect(firstCard.locator('.favorite-btn')).toHaveClass(/favorite-active/);
    
    // Navigate to favorites page
    await page.getByRole('link', { name: 'Favorites' }).click();
    
    // Verify the car is in favorites
    await expect(page).toHaveURL(/.*favorites/);
    await expect(page.locator('.car-card').first()).toBeVisible();
  });

  test('should remove a car from favorites when clicking favorite button again', async ({ page }) => {
    // Add car to favorites from home page
    const firstCard = page.locator('.car-card').first();
    await firstCard.locator('.favorite-btn').click();
    await expect(firstCard.locator('.favorite-btn')).toHaveClass(/favorite-active/);
    
    // Navigate to favorites
    await page.getByRole('link', { name: 'Favorites' }).click();
    await expect(page.locator('.car-card').first()).toBeVisible();
    
    // Remove from favorites
    await page.locator('.car-card').first().locator('.favorite-btn').click();
    
    // Should show empty state
    await expect(page.getByText('No favorites yet')).toBeVisible();
  });

  test('should persist favorites when navigating between pages', async ({ page }) => {
    // Add car to favorites
    const firstCard = page.locator('.car-card').first();
    await firstCard.locator('.favorite-btn').click();
    
    // Navigate to favorites
    await page.getByRole('link', { name: 'Favorites' }).click();
    await expect(page.locator('.car-card').first()).toBeVisible();
    
    // Go back to home
    await page.getByRole('link', { name: 'Home' }).click();
    
    // Favorite button should still be active
    await expect(page.locator('.car-card').first().locator('.favorite-btn')).toHaveClass(/favorite-active/);
  });

  test('should display multiple favorites', async ({ page }) => {
    // Add first car to favorites
    await page.locator('.car-card').first().locator('.favorite-btn').click();
    
    // Add second car to favorites
    await page.locator('.car-card').nth(1).locator('.favorite-btn').click();
    
    // Navigate to favorites
    await page.getByRole('link', { name: 'Favorites' }).click();
    
    // Should have 2 cars
    await expect(page.locator('.car-card')).toHaveCount(2);
  });
});

