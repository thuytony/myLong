import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ReducerFactory from './ReducerFactory';
import SagaFactory from './SagaFactory';

const sagaMiddleware = createSagaMiddleware();
function configureStore() {
  const store = createStore(ReducerFactory, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(SagaFactory);
  return store
}

const store = configureStore();

export { store };
