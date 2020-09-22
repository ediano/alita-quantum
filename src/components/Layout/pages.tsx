import React from 'react';
import Notification from '../Notification';

import Header from '../Header';
import Footer from '../Footer';

const Pages: React.FC = ({ children }) => (
  <>
    <Header page="page" />
    {children}
    <hr style={{ height: 1, background: 'var(--grey)' }} />
    <Notification />
    <Footer />
  </>
);

export default Pages;
