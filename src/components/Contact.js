import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import BaseLayout from './layouts/BaseLayout';
import Cook1 from '../static/images/cook1.jpg';

class Contact extends Component {
  state = {
    cooks: [
      {
        id: 1,
        imgSrc: Cook1,
        title: 'K-MAGRA',
        content:
          'The Cooking Cooks are Francesco and Alice, and they sell beautiful hand crafted Artisan fresh pasta. Their influences come from the vast larder of Italian and British cooking and they have given it a twist with their own unique, modern style. Some dishes you will have heard of, others are a little more unusual. Alice & Fancesco use only the freshest of ingredients & are always experimenting with seasonal ideas and different flavours. They have a wide range of pasta’s some super healthy, some gluten free, all the dough is made with tasty vegetables, seeds and fruits, they are magical on the eye as well as on the tum!'
      }
    ]
  };

  renderCooks = () => {
    return this.state.cooks.map(cook => {
      return (
        <div className="restaurationWrapperMobile" key={cook.id}>
          <Row>
            <div className="restaurationText">
              <div id="restaurationTitle">{cook.title}</div>
              <div id="restaurationContent">{cook.content}</div>
              <div className="restaurationLogoWrapper">
                <i className="fab fa-instagram restaurationLogo" />
                <i className="fab fa-facebook-square restaurationLogo" />
              </div>
            </div>
            <div>
              <Image src={cook.imgSrc} className="imageRestauration" />
            </div>
          </Row>
        </div>
      );
    });
  };

  render() {
    return (
      <BaseLayout className="contactBackground">
        <MediaQuery query="(min-device-width: 836px)">
          <div className="restaurationWrapper">
            <Row>
              <Col className="restaurationText">
                <div id="restaurationTitle">{this.state.cooks[0].title}</div>
                <div id="restaurationContent">
                  {this.state.cooks[0].content}
                </div>
                <div className="restaurationLogoWrapper">
                  <i className="fab fa-instagram restaurationLogo" />
                  <i className="fab fa-facebook-square restaurationLogo" />
                </div>
              </Col>
              <Col>
                <Image
                  src={this.state.cooks[0].imgSrc}
                  className="imageRestauration"
                />
              </Col>
            </Row>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 835px)">
          {this.renderCooks()}
        </MediaQuery>
      </BaseLayout>
    );
  }
}

export default Contact;
