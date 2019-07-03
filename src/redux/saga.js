import { put, takeEvery, all } from 'redux-saga/effects';
import {playSong , buyDiamonds} from './actions';

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
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

// Our worker Saga: will perform the async task
export function* buildStripe(action) {

  const Stripe = window.Stripe;
  const stripe = Stripe(STRIPE_PUBLIC_KEY);
  stripe.redirectToCheckout({
    sessionId: action.data
  })
  .then(res => {});
}

// Here we await the success action on which we emit the play action
export function* watchBuyDiamonds(action) {
  yield takeEvery('BUY_DIAMONDS_SUCCESS', buildStripe);
}

// here we can combine exports
export default function* rootSaga() {
  yield all([
    watchPlayAsync(),
    watchBuyDiamonds()
    ]);
}