import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './skyImageGallery.css'


const SkyImageGallery = (props) => {
  return (
    <Row  bsPrefix= "SIM-container"className="SIM-container">
      <Col xl={{span:5}} lg={{span:5}} sm={{span:5}}xs={{span:5}} className="SIM-blue">
        <Row>
          <Col  lg={{offset:3}} className="SIM-Title">
          <p>{props.country}</p>
          </Col>
      </Row>
      <Row className="SIM-artist-row1">
        <Col lg={{offset:3}}>
      <p className="SIM-artist" style={{marginTop:"auto"}}>{props.artist1}</p>
      </Col>
    </Row>
        <Row>
          <Col lg={{offset:3}}>
        <p className="SIM-artist">{props.artist2}</p>
        </Col>
      </Row>
    </Col>
      <Col xl={{span:3}} lg={{span:3}} sm={{span:3}}xs={{span:3}}>
        <a href={props.link1}><img src={props.image1} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a>
      </Col>
      <Col xl={{span:3}} lg={{span:3}} sm={{span:3}}xs={{span:3}}>
        <a href={props.link2}><img src={props.image2} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a>
      </Col>
      <Col xl={{span:1}} lg={{span:1}} sm={{span:1}}xs={{span:1}} className="SIM-red">
      </Col>
    </Row>
  );
}

export default SkyImageGallery;
