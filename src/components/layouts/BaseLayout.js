import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = props => {
  const { children, className } = props;

  return (
    <div className={`baselayout ${className}`}>
      <div className="baseloutWrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
