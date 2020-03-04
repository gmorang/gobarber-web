import React from 'react';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';
import { Link } from 'react-router-dom';
import Notifications from '../notifications';

function Header() {
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
              <strong>Gabriel Morandim</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Gabriel Morandim" />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}

export default Header;
