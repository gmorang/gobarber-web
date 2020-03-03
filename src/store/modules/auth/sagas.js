import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuario não é prestador');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Usuário ou senha incorretos');
    yield put(signFailure());
  }

}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
