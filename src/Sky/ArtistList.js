import sara_profile from '../assets/人物照-Sara.jpg';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ArtistList.css';


const ArtistList = (props) => {
  return(
    <Row bsPrefix="AL_Container">
      <Row> Canadian Artist </Row>
      <Row>
        <Col>
          <Row>  <a href="/SkyArtist"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><ul><li> Sara Boychuk </li></ul></Row>
        </Col>
        <Col>
          <Row>  <a href="/SkyArtist1"><img src={valerie_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><ul><li> Valerie Durant </li></ul></Row>
        </Col>
      </Row>

      <Row> Canadian Artist </Row>
      <Row>
        <Col>
          <Row>  <a href="/SkyArtist2"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><ul><li> Hsiao-Hsia Pan </li></ul></Row>
        </Col>
        <Col>
          <Row>  <a href="/SkyArtist3"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><ul><li> Dumas Temu </li></ul></Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>  <a href="/SkyArtist4"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row> <ul><li> Hsien-ling Yin </li></ul></Row>
        </Col>
        <Col>
          <Row>  <a href="/SkyArtist5"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><ul><li> Estrella Chuang </li></ul></Row>
        </Col>
      </Row>
    </Row>
  );
}
export default ArtistList;
