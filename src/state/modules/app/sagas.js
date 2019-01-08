import {
    all,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';
import { BOOT, bootFinished } from './';

export function* watchAppBoot() {
    yield takeLatest(BOOT, function*() {
        yield put(bootFinished());
    });
}

export default function* auth() {
    yield all([
        fork(watchAppBoot)
    ]);
}
  