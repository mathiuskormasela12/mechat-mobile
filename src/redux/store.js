// ===== Store
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers';

const persistedStore = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  const persistor = persistStore(store);

  return {store, persistor};
};

export default persistedStore;
