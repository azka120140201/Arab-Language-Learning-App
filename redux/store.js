import { configureStore } from '@reduxjs/toolkit';

// Definisikan initial state
const initialState = {
  containerColor: '#F9F6EE',
};

// Definisikan reducer untuk mengubah state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_COLOR':
      return {
        ...state,
        containerColor: action.payload,
      };
    default:
      return state;
  }
};

// Buat store Redux menggunakan configureStore
const store = configureStore({
  reducer: reducer,
});

export default store;
