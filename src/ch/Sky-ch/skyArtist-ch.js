import React from 'react';

import Placeholder_Person from "../../assets/Placeholder_Person.jpg";
import { Container, Row, Col } from "react-bootstrap";
import ProgramInfoCH from '../programInfo-ch';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Img from "../../modules/MainContents_img"
import MobileShareButton from "../../modules/mobileShareButton";
import Footer from "../footer-ch";
import SkyOtherArtists from '../../skyOtherArtists';
import Slider from '../../modules/img_slider_final'
import MainContents_OneArtistCH from '../../modules/MainContents_OneArtistCH';
import MainContents_WithBold from "../../modules/MainContents_WithBold";
import MainContents_TwoArtist from "../../modules/MainContents_TwoArtistPic";
import fb from '../../assets/f_logo_RGB-Blue_58.png'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { SocialIcon } from 'react-social-icons';
function SkyArtist(props) {
  return (
    <div>
      <Container fluid style={{padding:"0"}}>

      <ProgramInfoCH
          subtitle="天空"
          title= {props.title}
          artistName= {props.location}
          url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/"
          color="#D9C739"
          ></ProgramInfoCH>

        <Row><Col lg={{offset:2}} md={{offset:1}} sm={{offset:1}} xs={{offset:1}}><p className="artTitle">{props.artName}</p></Col></Row>

        <MainContents_WithBold contents={props.content} bold={props.bold} contents2={props.contents2}></MainContents_WithBold>
        <MainContents_OneArtistCH src={props.profile} title={props.name} contents={props.artistInfo}></MainContents_OneArtistCH>
      <div className="media_col">
      <Row >
          <Col className="SA_artistInfo" xl={{span:10, offset:2}} lg={{span:10, offset:2}} md={{span:1, offset:1}} sm={{ span:1, offset:1}} xs={{span:1, offset:1}}>
            <span className="SA_artistInfo">藝術家資訊</span>
              <SocialIcon network="facebook" url={props.fb}/>
              <SocialIcon network="instagram" url={props.ig}/>
              <SocialIcon network="youtube" url={props.yt}/>
              <SocialIcon network="twitter" url={props.tw}/>
              <SocialIcon url={props.other}/>
            </Col>
        </Row>
    </div>
    <div className="media_col2">
        <Row >
          <Col className="SA_artistInfo2" xl={{span:10, offset:2}} lg={{span:10, offset:2}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}>
            <span className="SA_artistInfo2">藝術家資訊</span>
            </Col>
        </Row>
        <Row>
          <Col xl={{span:10, offset:2}} lg={{span:10, offset:2}} md={{span:10, offset:1}} sm={{ span:10, offset:1}} xs={{span:10, offset:1}}>
            <SocialIcon network="facebook" url={props.fb}/>
            <SocialIcon network="instagram" url={props.ig}/>
            <SocialIcon network="youtube" url={props.yt}/>
            <SocialIcon network="twitter" url={props.tw}/>
            <SocialIcon url={props.other}/>
          </Col>
        </Row>
        </div>


        <Second_Title secondTitle="其他藝術家:" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <div className="paddings"></div>
        <SkyOtherArtists url1={props.url1} url2={props.url2} url3={props.url3} url4={props.url4} url5={props.url5}
           img1={props.other1} img2={props.other2} img3={props.other3} img4={props.other4} img5={props.other5}
          name1={props.othername1} name2={props.othername2} name3={props.othername3} name4={props.othername4} name5={props.othername5}></SkyOtherArtists>

        <MobileShareButton togoUrl={props.shareURL}></MobileShareButton>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default SkyArtist;
