import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Notification from '../Notification';
import Sponsored from '../Sponsored';

const Index: React.FC = ({ children }) => (
  <>
    <Header page="home">{children}</Header>
    <Notification />
    <Sponsored />
    <Footer />
  </>
);

export default Index;
