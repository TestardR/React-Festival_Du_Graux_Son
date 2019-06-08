import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Link id="footerSignature" to="/">
        © Romain Testard, 2019
      </Link>
    </div>
  );
};

export default Footer;
