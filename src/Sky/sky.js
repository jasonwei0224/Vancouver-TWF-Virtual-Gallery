import React from 'react';
import ImgSlider from '../img_slider';
import { Container, Row, Col, Button} from "react-bootstrap";
import ProgramInfo from '../programInfo';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../modules/MainContents_Important"
import Button1 from "../modules/Button1";
import Footer from "../footer-temp";
import SkyImageGallery from "../skyImageGallery";
import './sky.css'
import Slider from './img_slider_final_sky'
import Slider2 from './img_slider_final_sky2'
import ArtistList from './ArtistList'

import sara1 from '../assets/Sara1.jpg';
import sara2 from '../assets/Sara2.jpg';
import valerie from '../assets/Valerie.jpg';
import star from '../assets/心星.jpg';
import peter from '../assets/潘小俠.jpg';
import p1 from '../assets/阿比1.jpg';
import p2 from '../assets/阿比2.jpg';
import huang from '../assets/黃約農.jpg'

import sara_profile from '../assets/人物照-Sara.jpg';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'

import sky_image1 from '../assets/SKY_top_IMAGE-1.jpg'
import sky_page1 from '../assets/sky_page1.jpg';
import sky_image2 from '../assets/SKY_top_IMAGE-2.jpg'

import sky_cell_image1 from'../assets/SKY_top_IMAGE-1_Cell.jpg';
import sky_cell_image2 from'../assets/SKY_top_IMAGE-2_Cell.jpg';

import Dekstop_Artist from './desktop_artist';

function Sky() {

  const goToForm=()=> {
    window.location='Sky_Form';
  };

  var images = [sky_page1, sky_image2]
  var images2 = [sky_cell_image1, sky_cell_image2]
var text=`What is something that you can see when you look up, no matter wherever you are in the world? The sky is one constant no matter where you are and what time of day, it is there above the horizon.

Working with photographers in Canada and Taiwan, Vancouver TAIWANfest presents Eight massive lanterns at šxʷƛ̓ənəq Xwtl'e7énḵ Square (formally known as Vancouver Art Gallery North Plaza) in downtown Vancouver. These images show that despite our geographical differences, we all look towards that same sky that looms over our heads, further reaffirming that we are all in this together. Sky is built on the concept of removing the influence of colour; by looking past our differences, we can see that we are one and the same.
`
var text2=`In all that the world has gone through, the unchanging sky gives people a sense of hope and anticipation for the feeling of a normal day to come again. Furthermore, Indigenous teachings and stories about the sky can guide us in these times. By giving each image a background story, we can implore others to look to the sky and gain strength.

Your experience and view of the sky will be different depending on the time of day. These lanterns will create a whole new dynamic look and feel through the use of LED lights in the evenings.
`
return (
    <div>
      <Container fluid style={{padding:"0"}}>
        <span className="desktop_slider_sky"><Slider images={images}/></span>
     <span className="mobile_slider_sky"><Slider2 images={images2}/></span>

        <ProgramInfo
          subtitle="I'm different, just like you!"
          title="SKY"
          artistName="Curator: Jessica Sung"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"
          color="#246f79"
          ></ProgramInfo>


        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>
      <div className="sky_mobile_artists">
        <Row>
          <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}}  className="sky_col_border2">
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name" style={{textAlign:"center"}}>Sara Boychuk</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_country"style={{textAlign:"center", fontWeight:"bold"}}>Canada</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Hidden-In-The-Clouds"><img style={{width:"100%", height:"auto"}}src={sara_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><a href="/Hidden-In-The-Clouds"><Button Button bsPrefix="sky_art1_btn" className="sky_art1_btn">HIDDEN IN THE CLOUSE</Button></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><a href="/Pause" style={{color:"#EF5797"}} ><Button Button bsPrefix="sky_art2_btn" className="sky_art2_btn">PAUSE</Button></a></Col></Row>
          </Col>
          <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} className="sky_col_border2">
            <Row><Col xl={{span:12}} lg={{span:12}} style={{textAlign:"center"}} className="sky_artist_name">Valerie Durant</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}} className="sky_artist_country">Canada</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a  href="/Infinite-Sky-For-Everett"><img style={{width:"100%", height:"auto"}}src={valerie_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}}><a  href="/Infinite-Sky-For-Everett"><Button Button bsPrefix="sky_art3_btn" className="sky_art3_btn">INFINITE SKY<br/>FOR EVER<span style={{fontStyle:"italic"}}>ETT</span></Button></a></Col></Row>
          </Col>
          <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}} className="sky_col_border2">
            <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name_mobile" style={{textAlign:"center"}}>Hsien-Ling Yin</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center" , fontWeight:"bold"}} className="sky_artist_country">Taiwan</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a href="/Visible-Or-Invisible"><img style={{width:"100%", height:"auto"}}src={p1_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><a href="/Visible-Or-Invisible"><Button bsPrefix="sky_art4_btn" className="sky_art4_btn">VISIBLE OR INVISIBLE</Button></a> </Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", whtieSpace:"pre-line"}} ><a href="/With-The-Passage-Of-Time"><Button bsPrefix="sky_art5_btn" className="sky_art5_btn">WITH THE PASSAGE<br/>OF TIME</Button></a></Col></Row>
          </Col>
          <div className="sky_space"></div>
              <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>
          <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Hsiao-Hsia Pan</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center" , fontWeight:"bold"}} className="sky_artist_country">Taiwan</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/General-Rock-Green-Island"><img style={{width:"100%", height:"auto"}}src={peter_profile}></img></a></Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><a href="/General-Rock-Green-Island"><Button bsPrefix="sky_art6_btn" className="sky_art6_btn">GENERAL ROCK GREEN ISLAND</Button></a> </Col></Row>

        </Col>
        <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
          <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Dumas Temu</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center" , fontWeight:"bold"}} className="sky_artist_country">Taiwan</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a  href="/Gazing-In-Holy-Ridge"><img style={{width:"100%", height:"auto"}}src={huang_profile}></img></a></Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}> <a  href="/Gazing-In-Holy-Ridge"><Button Button bsPrefix="sky_art7_btn" className="sky_art7_btn">GAZING IN HOLY RIDGE</Button></a></Col></Row>

        </Col>
        <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
          <Row><Col xl={{span:12}} lg={{span:12}}   md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Estrella Chuang</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center" , fontWeight:"bold"}} className="sky_artist_country">Taiwan</Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Boat-In-The-Sun-Moon-Lake"><img style={{width:"100%", height:"auto"}}src={star_profile}></img></a></Col></Row>
          <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}> <a href="/Boat-In-The-Sun-Moon-Lake"><Button bsPrefix="sky_art8_btn" className="sky_art8_btn">THE BOAT IN THE SUN MOON LAKE</Button></a></Col></Row>
        </Col>
        </Row>
        <div className="sky_space"></div>
        <Row>

        </Row>
        </div>

        <Dekstop_Artist></Dekstop_Artist>


        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text2}></MainContents_Middle_Adonis>
        <Second_Title secondTitle="UNDER THE SAME SKY PROJECT" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important contents="Be part of the art with our Under the same sky project. Follow us on social media to find out when to take a photo of the sky wherever you are globally and upload your photo for a chance to be featured. Click the link below for more details."></MainContents_Important>
        <div className="sky_space"></div>
        <Button1 onclick={goToForm} title="UPLOAD YOUR PHOTO" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default Sky;
