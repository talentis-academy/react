import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useFavoritesStore } from './favoritesStore';

// Les tests tournent dans Node, qui n'a ni window ni localStorage : on crée un localStorage en mémoire
// pour le middleware persist (vi.hoisted passe avant les imports, donc avant la création du store)
vi.hoisted(() => {
  const data = new Map();
  const localStorage = {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
    clear: () => data.clear(),
  };
  globalThis.localStorage = localStorage;
  globalThis.window = { localStorage };
});

// describe : un groupe de tests ; it : un test ; expect : ce qu'on attend (sinon le test est rouge)
describe('favoritesStore', () => {
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

  // Le store est global : on le remet à zéro avant chaque test (et on vide le localStorage)
  beforeEach(() => {
    useFavoritesStore.persist.clearStorage();
    useFavoritesStore.setState({ favorites: [] });
  });

  it('should return initial state', () => {
    expect(useFavoritesStore.getState().favorites).toEqual([]);
  });

  it('should add a car to favorites', () => {
    useFavoritesStore.getState().toggleFavorite(mockCar);
    const { favorites } = useFavoritesStore.getState();
    expect(favorites).toHaveLength(1);
    expect(favorites[0]).toEqual(mockCar);
  });

  it('should remove a car from favorites when toggled again', () => {
    useFavoritesStore.setState({ favorites: [mockCar] });
    useFavoritesStore.getState().toggleFavorite(mockCar);
    expect(useFavoritesStore.getState().favorites).toHaveLength(0);
  });

  it('should add multiple cars to favorites', () => {
    useFavoritesStore.getState().toggleFavorite(mockCar);
    useFavoritesStore.getState().toggleFavorite(mockCar2);
    const { favorites } = useFavoritesStore.getState();

    expect(favorites).toHaveLength(2);
    expect(favorites).toContainEqual(mockCar);
    expect(favorites).toContainEqual(mockCar2);
  });

  it('should remove specific car without affecting others', () => {
    useFavoritesStore.setState({ favorites: [mockCar, mockCar2] });
    useFavoritesStore.getState().toggleFavorite(mockCar);
    const { favorites } = useFavoritesStore.getState();

    expect(favorites).toHaveLength(1);
    expect(favorites[0]).toEqual(mockCar2);
  });

  it('les favoris sont enregistrés dans le localStorage', () => {
    useFavoritesStore.getState().toggleFavorite(mockCar);
    const saved = JSON.parse(localStorage.getItem('favorites'));
    expect(saved.state.favorites).toEqual([mockCar]);
  });
});
