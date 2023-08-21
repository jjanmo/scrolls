import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import bookmarkReducer from './bookmarkSlice'
import { createWrapper } from 'next-redux-wrapper'

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
})

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })

const store = makeStore()

export const wrapper = createWrapper<AppStore>(makeStore, { debug: process.env.NODE_ENV !== 'production' })
