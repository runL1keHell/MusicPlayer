import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.ts';
import musicReducer from './music/music.ts'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer,
    music: musicReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['music']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch