import React from 'react';
import { Col, Row } from 'reactstrap';

const Sponsor = () => {
  return (
    <Row className="justify-content-center sponsor">
      <Col xs="auto" md="auto" lg="auto">
        <div className="footerItem">Sp1</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="footerItem">Sp2</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="footerItem">Sp3</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="footerItem">Sp4</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="footerItem">Sp5</div>
      </Col>
    </Row>
  );
};

export default Sponsor;
