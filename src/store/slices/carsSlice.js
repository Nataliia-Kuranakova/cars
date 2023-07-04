import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'localCars',
  initialState: {
    data: [],
  },
  reducers: {
    setCars(state, action) {
      state.data = action.payload;
    },

    addCar(state, action) {
      state.data.unshift(action.payload);
    },
    editCar(state, action) {
      const updated = state.data.map((car) => {
        if (car.id === action.payload.id) {
          return {
            ...car,
            ...action.payload,
          };
        } else {
          return car;
        }
      });
      state.data = updated;
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { addCar, removeCar, setCars, editCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
