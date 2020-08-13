import React from 'react';
import './skyOtherArtists.css'
import HoverImage from "react-hover-image"
import Second_Title from "./modules/Second_Title"
import { Button, Container, Row, Col } from "react-bootstrap";

function SkyOtherArtists(props) {
  return (
    <div>
    <div className="desktop_container">
      <Row>
        <Col  xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}>
          <Button href={props.skyhome} bsPrefix ="otherArtist_button" className="otherArtist_button"> {props.t} </Button>
        </Col>
    </Row>
    {/*}  <Second_Title secondTitle={props.t} style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
    <div className="SOA-container" style={{marginTop:"30px"}}>

      <div className="row">
        <div className="col-sm-2">
          <a href={props.url1}>
          <HoverImage className="SOA-img" hoverSrc={props.name1} src={props.img1}/>
          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url2}>
            <HoverImage className="SOA-img" hoverSrc={props.name2} src={props.img2}/>

          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
            <HoverImage className="SOA-img" hoverSrc={props.name3} src={props.img3}/>

          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
           <HoverImage className="SOA-img" hoverSrc={props.name4} src={props.img4}/>
          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
            <HoverImage className="SOA-img" hoverSrc={props.name5} src={props.img5}/>
          </a>
        </div>
      </div>
    </div>*/}
      </div>
    <div className="mobile_container_soa">
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:11, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url1}>{props.textName1}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url2}>{props.textName2}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url3}>{props.textName3}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url4}>{props.textName4}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url5}>{props.textName5}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url6}>{props.textName6}</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:10, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}
          ><Button className="soa_button" bsPrefix="soa_button" href={props.url6}>{props.textName6}</Button></Col>
      </Row>
      <div className="soa_empty"></div>
    </div>
    </div>

  );
}

export default SkyOtherArtists;
