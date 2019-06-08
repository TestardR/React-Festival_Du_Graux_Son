import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = props => {
  const { children, className } = props;
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
