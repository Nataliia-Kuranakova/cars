import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { carsApi } from './apis/carsApi';
import {
  carsReducer,
  setCars,
  addCar,
  editCar,
  removeCar,
} from './slices/carsSlice';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    localCars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(carsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchCarsQuery } from './apis/carsApi';
export { setCars, addCar, editCar, removeCar };

window.state = store.getState;
