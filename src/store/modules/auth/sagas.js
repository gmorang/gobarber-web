import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', { email, password });

    const { jwt, user } = response.data;

    if (!user.provider) {
      toast.error('Usuario não é prestador');
      return;
    }

    api.defaults.headers['Authorization'] = `Bearer ${jwt}`;

    yield put(signInSuccess(jwt, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Usuário ou senha incorretos');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload

    yield call(api.post, 'users', { name, email, password, provider: true })

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
