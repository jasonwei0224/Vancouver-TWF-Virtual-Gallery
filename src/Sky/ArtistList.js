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
      <Row><Col className="AL_Title"> Canadian Artist </Col></Row>
      <Row>
        <Col xl={{span:5, offset:1}} lg={{span:5, offset:1}}  sm={{span:5, offset:1}}xs={{span:5, offset:1}}>
          <Row><a href="/SkyArtist"><img src={sara_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName"> Sara Boychuk </p></Col></Row>
        </Col>
        <Col  xl={{span:5}} lg={{span:5}} sm={{span:5}} xs={{span:5}}>
          <Row>  <a href="/SkyArtist1"><img src={valerie_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName">  Valerie Durant </p></Col></Row>
        </Col>
      </Row>

      <Row><Col className="AL_Title2"> Taiwanese Artist</Col> </Row>
      <Row>
        <Col xl={{span:5, offset:1}} lg={{span:5, offset:1}}  sm={{span:5, offset:1}}xs={{span:5, offset:1}}>
          <Row>  <a href="/SkyArtist2"><img src={peter_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName">  Hsiao-Hsia Pan </p></Col></Row>
        </Col>
        <Col  xl={{span:5}} lg={{span:5}} sm={{span:5}} xs={{span:5}}>
          <Row>  <a href="/SkyArtist3"><img src={huang_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName">  Dumas Temu </p></Col></Row>
        </Col>
      </Row>
      <div className="AL_Row2"></div>
      <Row>
        <Col xl={{span:5, offset:1}} lg={{span:5, offset:1}}  sm={{span:5, offset:1}}xs={{span:5, offset:1}}>
          <Row>  <a href="/SkyArtist4"><img src={p1_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName">  Hsien-ling Yin </p></Col></Row>
        </Col>
        <Col xl={{span:5}} lg={{span:5}} sm={{span:5}} xs={{span:5}}>
          <Row>  <a href="/SkyArtist5"><img src={star_profile} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a></Row>
          <Row><Col style={{textAlign: "center"}}><p className="AL_ArtistName"> Estrella Chuang </p></Col></Row>
        </Col>
      </Row>
      <div className="AL_Row2"></div>
    </Row>
  );
}
export default ArtistList;
