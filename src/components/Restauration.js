import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';

import BaseLayout from './layouts/BaseLayout';
import Cook1 from '../static/images/cook1.jpg';

class Restauration extends Component {
  state = {
    cooks: [
      {
        id: 1,
        imgSrc: Cook1,
        title: 'The Cooking Cooks',
        content:
          'The Cooking Cooks are Francesco and Alice, and they sell beautiful hand crafted Artisan fresh pasta. Their influences come from the vast larder of Italian and British cooking and they have given it a twist with their own unique, modern style. Some dishes you will have heard of, others are a little more unusual. Alice & Fancesco use only the freshest of ingredients & are always experimenting with seasonal ideas and different flavours. They have a wide range of pasta’s some super healthy, some gluten free, all the dough is made with tasty vegetables, seeds and fruits, they are magical on the eye as well as on the tum!'
      }
    ]
  };

  render() {
    return (
      <BaseLayout className="restoBackground">
        <div className="restaurationWrapper">
          <Row className="justify-content-center">
            <Col className="restaurationText">
              <div id="restaurationTitle">{this.state.cooks[0].title}</div>
              <div id="restaurationContent">{this.state.cooks[0].content}</div>
              <div className="restaurationLogoWrapper">
                <i className="fab fa-instagram restaurationLogo" />
                <i className="fab fa-facebook-square restaurationLogo" />
              </div>
            </Col>
            <Image
              src={this.state.cooks[0].imgSrc}
              className="imageRestauration"
            />
          </Row>
        </div>
        <div className="restaurationWrapper">
          <Row className="justify-content-center">
            <Col className="restaurationText">
              <div id="restaurationTitle">{this.state.cooks[0].title}</div>
              <div id="restaurationContent">{this.state.cooks[0].content}</div>
              <div className="restaurationLogoWrapper">
                <i className="fab fa-instagram restaurationLogo" />
                <i className="fab fa-facebook-square restaurationLogo" />
              </div>
            </Col>
            <Image
              src={this.state.cooks[0].imgSrc}
              className="imageRestauration"
            />
          </Row>
        </div>
      </BaseLayout>
    );
  }
}

export default Restauration;
