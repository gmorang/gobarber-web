import React from 'react';

import { Wrapper, Content } from './styles';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default AuthLayout;
