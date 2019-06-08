import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import MediaQuery from 'react-responsive';
import HeaderBurger from './HeaderBurger';

const Header = () => {
  return (
    <Fragment>
      <MediaQuery query="(min-device-width: 768px)">
        <Row>
          <Col lg="9" sm="7">
            <ul className="headerMenu">
              <li>
                <Link className="headerItem" id="headerItem1" to="/">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link className="headerItem" id="headerItem2" to="/lineup">
                  LINE-UP
                </Link>
              </li>
              <li>
                <Link className="headerItem" to="/restauration">
                  RESTAURATION
                </Link>
              </li>
              <li>
                <Link className="headerItem" to="/hebergement">
                  HEBERGEMENT
                </Link>
              </li>
              <li>
                <Link className="headerItem" id="headerItem3" to="/billeterie">
                  BILLETS
                </Link>
              </li>
              <li>
                <Link className="headerItem" id="headerItem4" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link className="headerItem" to="/info">
                  INFO-PRATIQUE
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg="3" sm="5">
            <div className="headerLogo">K-MAGRA</div>
          </Col>
        </Row>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 767.9px)">
        <HeaderBurger />
      </MediaQuery>
    </Fragment>
  );
};

export default Header;
