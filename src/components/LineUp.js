import React from 'react';
import BaseLayout from './layouts/BaseLayout';
import { Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';
import LineupBase from '../static/images/lineupBase.jpg';

const LineUp = () => {
  return (
    <BaseLayout className="lineupBackground">
      <div className="lineupWrapper">
        <Row className="justify-content-around">
          <Col xs="12" md="8" lg="8">
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                Banzai
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                Kamaka
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                Roloko
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                ullamco
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                fugiat
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                cupidatat
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                Veniam
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                incididunt
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                adipisicing
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                magna
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                commodo
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                pariatur
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                cillum
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                esse
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                sint
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                dolore
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                deserunt
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                Consequat
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                amet
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                irure
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                mollit
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                aute
              </Col>
              <Col className="lineupItem" xs="auto" md="auto" lg="auto">
                fugiat
              </Col>
            </Row>
          </Col>
          <Col xs="0" md="4" lg="4">
            <Image src={`${LineupBase}`} roundedCircle />
          </Col>
        </Row>
      </div>
    </BaseLayout>
  );
};

export default LineUp;
