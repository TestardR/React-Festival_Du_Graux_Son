import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import BaseLayout from './layouts/BaseLayout';
import Cook1 from '../static/images/cook1.jpg';
import Cook2 from '../static/images/cook2.jpg';

class Hebergement extends Component {
  state = {
    cooks: [
      {
        id: 1,
        imgSrc: Cook1,
        title: 'Dodo',
        content:
          'The Cooking Cooks are Francesco and Alice, and they sell beautiful hand crafted Artisan fresh pasta. Their influences come from the vast larder of Italian and British cooking and they have given it a twist with their own unique, modern style.'
      },
      {
        id: 2,
        imgSrc: Cook2,
        title: 'Camping',
        content:
          "Making small batch, inventively flavoured real dairy ice cream, sorbet and vegan ice cream since 2010. Winner of British Street Food awards 'Best Dessert' 2011, '12, '13 and winner of 'Best Of The Best' 2012."
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
      <BaseLayout className="hebBackground">
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
          <div className="restaurationWrapper">
            <Row>
              <Col>
                <Image
                  src={this.state.cooks[1].imgSrc}
                  className="imageRestauration"
                />
              </Col>
              <Col className="restaurationText">
                <div id="restaurationTitle">{this.state.cooks[1].title}</div>
                <div id="restaurationContent">
                  {this.state.cooks[1].content}
                </div>
                <div className="restaurationLogoWrapper">
                  <i className="fab fa-instagram restaurationLogo" />
                  <i className="fab fa-facebook-square restaurationLogo" />
                </div>
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

export default Hebergement;
