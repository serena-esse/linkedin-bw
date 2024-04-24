import { configureStore,combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import singleAccount from '../reducer/singleAccount' // non serve /index, basta puntare alla cartella che lo contiene

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

const persistConfig = {
  key: 'root',
  storage,
  blacklist:["search"]
};

const persistedReducer = persistReducer(persistConfig, singleAccount);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
const persistor = persistStore(store);

export { store, persistor };
