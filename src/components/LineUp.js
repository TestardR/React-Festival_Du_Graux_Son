import React, { Component } from 'react';
import BaseLayout from './layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';
import LineupBase from '../static/images/lineupBase.jpg';
import LineupSky from '../static/images/lineupSky.jpg';
import LineupHotdog from '../static/images/lineupHotdog.jpg';
import LineupWar from '../static/images/lineupWar.jpg';
import LineupHippy from '../static/images/lineupHippy.jpg';

class LineUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: LineupBase
    };
  }

  handleMouseOver(src) {
    this.setState({
      imgSrc: src
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: LineupBase
    });
  }

  render() {
    return (
      <BaseLayout className="lineupBackground">
        <div className="lineupWrapper">
          <Row className="justify-content-around">
            <Col xs="12" md="8" lg="7">
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupSky)}
                  onMouseOut={() => this.handleMouseOut()}
                  src={this.state.imgSrc}
                >
                  Banzai
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHotdog)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  Kamaka
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupWar)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  Roloko
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHippy)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  ullamco
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupWar)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  fugiat
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHotdog)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  cupidatat
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupWar)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  Veniam
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHippy)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  incididunt
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHotdog)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  adipisicing
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupSky)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  magna
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupSky)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  commodo
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHippy)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  pariatur
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupWar)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  cillum
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHippy)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  esse
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHotdog)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  deserunt
                </Col>
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupSky)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  Consequat
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  className="lineupItem"
                  xs="auto"
                  md="auto"
                  lg="auto"
                  onMouseOver={() => this.handleMouseOver(LineupHippy)}
                  onMouseOut={() => this.handleMouseOut()}
                >
                  deserunt
                </Col>
              </Row>
            </Col>
            <Col xs="0" md="4" lg="5">
              <Image
                src={this.state.imgSrc}
                roundedCircle
                className="lineupImage"
              />
            </Col>
          </Row>
        </div>
      </BaseLayout>
    );
  }
}

export default LineUp;
