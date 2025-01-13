import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// Importez vos reducers ici
// import userReducer from './userSlice';
// import projectReducer from './projectSlice';

// Créer un réducteur temporaire
const tempReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    temp: tempReducer
    // user: userReducer,
    // projects: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;
