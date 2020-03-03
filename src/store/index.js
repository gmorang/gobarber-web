import createSagaMiddleware from 'redux-saga';
import createStore from './create-store';

import rootReducer from './modules/root-reducer';
import rootSaga from './modules/root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga)

export default store;
