import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import BaseLayout from './layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';

const LineupBase = '/images/lineupBase.jpg';
const LineupSky = '/images/lineupSky.jpg';
const LineupHotdog = '/images/lineupHotdog.jpg';
const LineupWar = '/images/lineupWar.jpg';
const LineupHippy = '/images/lineupHippy.jpg';

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
          <MediaQuery query="(min-device-width: 1101px)">
            <Row className="justify-content-around">
              <Col lg="7">
                <Row className="justify-content-center">
                  <Col
                    className="lineupItem"
                    xs="auto"
                    md="auto"
                    lg="auto"
                    onMouseOver={() => this.handleMouseOver(LineupSky)}
                    onMouseOut={() => this.handleMouseOut()}
                    src={require(`%PUBLIC_URL% ${LineupBase}`)}
                    alt="lineUp"
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
                    desidat
                  </Col>
                </Row>
              </Col>
              <Col lg="5">
                <Image
                  src={this.state.imgSrc}
                  roundedCircle
                  className="lineupImage"
                />
              </Col>
            </Row>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1100px)">
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
                desidat
              </Col>
            </Row>
          </MediaQuery>
        </div>
      </BaseLayout>
    );
  }
}

export default LineUp;
