import { describe, it, expect } from 'vitest';
import favoritesReducer, { toggleFavorite } from './favoritesSlice';

describe('favoritesSlice', () => {
  const mockCar = {
    id: 1,
    car: 'Tesla',
    car_model: 'Model S',
    car_color: 'Red',
    car_model_year: 2024,
    car_vin: 'TEST123',
    price: '$79,990',
    availability: true,
  };

  const mockCar2 = {
    id: 2,
    car: 'BMW',
    car_model: 'i8',
    car_color: 'Blue',
    car_model_year: 2023,
    car_vin: 'TEST456',
    price: '$147,500',
    availability: false,
  };

  it('should return initial state', () => {
    expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual({
      favorites: [],
    });
  });

  it('should add a car to favorites', () => {
    const state = favoritesReducer(undefined, toggleFavorite(mockCar));
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(mockCar);
  });

  it('should remove a car from favorites when toggled again', () => {
    const initialState = { favorites: [mockCar] };
    const state = favoritesReducer(initialState, toggleFavorite(mockCar));
    expect(state.favorites).toHaveLength(0);
  });

  it('should add multiple cars to favorites', () => {
    let state = favoritesReducer(undefined, toggleFavorite(mockCar));
    state = favoritesReducer(state, toggleFavorite(mockCar2));
    
    expect(state.favorites).toHaveLength(2);
    expect(state.favorites).toContainEqual(mockCar);
    expect(state.favorites).toContainEqual(mockCar2);
  });

  it('should remove specific car without affecting others', () => {
    const initialState = { favorites: [mockCar, mockCar2] };
    const state = favoritesReducer(initialState, toggleFavorite(mockCar));
    
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(mockCar2);
  });
});

