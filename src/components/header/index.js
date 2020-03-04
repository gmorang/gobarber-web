import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';
import { Link } from 'react-router-dom';
import Notifications from '../notifications';

function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={profile.avatar.url || "https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Gabriel Morandim" />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}

export default Header;
