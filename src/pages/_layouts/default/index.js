import React from 'react';

import { Wrapper } from './styles';
import PropTypes from 'prop-types';
import Header from '../../../components/header';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default DefaultLayout;
