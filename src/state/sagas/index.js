import { all } from 'redux-saga/effects';
// import routeSaga from './modules/routing/sagas';
// import appSaga from './modules/app/sagas.js';

export default function* sagas() {
  yield all([
    // fork(routeSaga),
    // fork(appSaga),
  ]);
}
