import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './create-store';
import persistReducers from './persist-reducer';

import rootReducer from './modules/root-reducer';
import rootSaga from './modules/root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export { store, persistor };
