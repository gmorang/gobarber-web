import React from 'react';

import { Wrapper } from './styles';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default DefaultLayout;
