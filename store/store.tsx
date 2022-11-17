import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ticketReducer from './Features/Ticket/ticketSlice'
import cinemaReducer from './Features/Cinema/cinemaSlice'
import userReducer from './User/UserSlice'
import movieReducer from './Features/Movies/movieSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, ticketReducer)

const combinedReducer = combineReducers({
  ticket: persistedReducer,
  cinema: cinemaReducer,
  user: userReducer,
  movies: movieReducer
})

const rootReducer = (state: any, action: any) => {
    if (action.type === 'PURGE') {
        state = undefined
    }
    
    return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
