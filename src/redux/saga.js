import { put, takeEvery, all } from 'redux-saga/effects';
import {playSong} from './actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async task
export function* play(action) {
  yield delay(1000);
  yield put(playSong('hello'));
}

// Here we await the success action on which we emit the play action
export function* watchPlayAsync(deviceId) {
  yield takeEvery('TRANSFER_PLAY_SUCCESS', play);
}

// here we can combine exports
export default function* rootSaga() {
  yield all([
    watchPlayAsync()
  ])
}