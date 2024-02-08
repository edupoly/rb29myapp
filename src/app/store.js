import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice';
import { countriesApi } from '../services/countriesapi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../services/productsApi';
import { postsApi } from '../services/postsApi';
export const store = configureStore({
  reducer: {
    c:counterReducer,
    t:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware),
})
setupListeners(store.dispatch)