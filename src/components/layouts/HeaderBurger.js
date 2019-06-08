import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Col, Row } from 'reactstrap';

export default class HeaderBurger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Row>
        <Col xs="4">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <Link to="/" onClick={() => this.closeMenu()}>
              ACCUEIL
            </Link>
            <Link to="/lineup" onClick={() => this.closeMenu()}>
              LINE-UP
            </Link>
            <Link to="/restauration" onClick={() => this.closeMenu()}>
              RESTAURATION
            </Link>
            <Link to="/hebergement" onClick={() => this.closeMenu()}>
              HEBERGEMENT
            </Link>
            <Link to="/billeterie" onClick={() => this.closeMenu()}>
              BILLETS
            </Link>
            <Link to="/contact" onClick={() => this.closeMenu()}>
              CONTACT
            </Link>
            <Link to="/info" onClick={() => this.closeMenu()}>
              INFO-PRATIQUE
            </Link>
          </Menu>
        </Col>
        <Col xs="8">
          <div className="headerLogo">K-MAGRA</div>
        </Col>
      </Row>
    );
  }
}
