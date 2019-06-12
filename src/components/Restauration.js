import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import BaseLayout from './layouts/BaseLayout';
import Cook1 from '../static/images/cook1.jpg';
import Cook2 from '../static/images/cook2.jpg';

class Restauration extends Component {
  state = {
    cooks: [
      {
        id: 1,
        imgSrc: Cook1,
        title: 'The Cooking Cooks',
        content:
          'The Cooking Cooks are Francesco and Alice, and they sell beautiful hand crafted Artisan fresh pasta. Their influences come from the vast larder of Italian and British cooking and they have given it a twist with their own unique, modern style. Some dishes you will have heard of, others are a little more unusual. Alice & Fancesco use only the freshest of ingredients & are always experimenting with seasonal ideas and different flavours. They have a wide range of pasta’s some super healthy, some gluten free, all the dough is made with tasty vegetables, seeds and fruits, they are magical on the eye as well as on the tum!'
      },
      {
        id: 2,
        imgSrc: Cook2,
        title: 'Gingers',
        content:
          "Making small batch, inventively flavoured real dairy ice cream, sorbet and vegan ice cream since 2010. Winner of British Street Food awards 'Best Dessert' 2011, '12, '13 and winner of 'Best Of The Best' 2012. Our recipe book MELT was published by Simon & Schuster 2013. Their beautiful retro ice cream van (lovingly hand designed inside and out) Ginger, loves meeting new crowds and their menu is always a talking point of any festival! Most ice creams are naturally gluten free, and 50% of the menu is vegan. Gingers only present vegan flavours that are every bit as divine as the real dairy versions."
      }
    ]
  };

  style = {
    backgroundColor: 'white',
    paddingBottom: '1rem',
    display: 'block'
  };

  renderCooks = style => {
    return this.state.cooks.map(cook => {
      return (
        <div className="restaurationWrapperMobile">
          <Row style={style}>
            <div className="restaurationText" key={cook.id}>
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
      <BaseLayout className="restoBackground">
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

export default Restauration;
