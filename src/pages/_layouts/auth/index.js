import React from 'react';

import { Wrapper } from './styles';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default AuthLayout;
