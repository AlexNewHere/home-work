import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {themesReducer} from './themesReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themesReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()