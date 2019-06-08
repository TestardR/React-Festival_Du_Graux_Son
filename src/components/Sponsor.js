import React from 'react';
import { Col, Row } from 'reactstrap';

const Sponsor = () => {
  return (
    <Row className="justify-content-center sponsor">
      <Col xs="auto" md="auto" lg="auto">
        <div className="sponsorItem">Sp1</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="sponsorItem">Sp2</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="sponsorItem">Sp3</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="sponsorItem">Sp4</div>
      </Col>
      <Col xs="auto" md="auto" lg="auto">
        <div className="sponsorItem">Sp5</div>
      </Col>
    </Row>
  );
};

export default Sponsor;
