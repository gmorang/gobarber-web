import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';
import AvatarInput from './avatar-input';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispacth = useDispatch();

  function handleSubmit(data) {
    dispacth(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispacth(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Sua senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input name="newPassword" type="password" placeholder="Confirme a sua senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button onClick={handleSignOut} type="button">Sair do Gobarber</button>
    </Container>
  );
}
