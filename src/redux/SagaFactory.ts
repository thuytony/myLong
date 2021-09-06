import { all, fork } from 'redux-saga/effects';
import { watchLogin, watchHome, watchListingNurse, watchListingCity } from '@module';

export default function* SagaFactory() {
  yield all([
    fork(watchLogin),
    fork(watchHome),
    fork(watchListingNurse),
    fork(watchListingCity),
  ]);
}
