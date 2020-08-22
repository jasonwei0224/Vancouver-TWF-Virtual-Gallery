import React from 'react';
import ImgSlider from '../img_slider';
import { Container, Row, Col, Button} from "react-bootstrap";
import ProgramInfoThinLine from '../programInfoThinLine';
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
import './desktop_artist.css'
import Slider from './img_slider_final_sky'
import Slider2 from './img_slider_final_sky2'
import ArtistList from './ArtistList';


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
import sky_image2 from '../assets/SKY_top_IMAGE-2.jpg'

import sky_cell_image1 from'../assets/SKY_top_IMAGE-1_Cell.jpg';
import sky_cell_image2 from'../assets/SKY_top_IMAGE-2_Cell.jpg';
function Dekstop_Artist() {

return (
  <div className="sky_desktop_artists">
  <Row>
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name" style={{textAlign:"center"}}>Sara Boychuk</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_country"style={{textAlign:"center"}}>Canada</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Hidden-In-The-Clouds"><img style={{width:"100%", height:"auto"}}src={sara_profile}></img></a></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | Art Works |</div></Col></Row>

      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div  ><a className="DA_artName" href="/Hidden-In-The-Clouds">Hidden in the Clouds</a></div></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><div style={{borderBottom:"1px solid #2f6e79", paddingBottom:"20px" , marginBottom:"20px"}}></div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} ><a href="/Pause"  className="DA_artName" >Pause</a></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} >
      <Row><Col xl={{span:12}} lg={{span:12}} style={{textAlign:"center"}} className="sky_artist_name">Valerie Durant</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}} className="sky_artist_country">Canada</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a  href="/Infinite-Sky-For-Evertt"><img style={{width:"100%", height:"auto"}}src={valerie_profile}></img></a></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}>| Art Works |</div></Col></Row>

      <Row><Col  xl={{span:12}} lg={{span:12}}  className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}><a  href="/Infinite-Sky-For-Everett" className="DA_artName" >Infinite Sky for Ever<span style={{fontStyle:"italic"}}>ett</span></a></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}}>
      <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name_mobile" style={{textAlign:"center"}}>Hsien-Ling Yin</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}} className="sky_artist_country">Taiwan</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a href="/Visible-Or-Invisible"><img style={{width:"100%", height:"auto"}}src={p1_profile}></img></a></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}>| Art Works |</div></Col></Row>

      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><a href="/Visible-Or-Invisible" className="DA_artName">Visibile or Invisible</a> </Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><div style={{borderBottom:"1px solid #2f6e79", paddingBottom:"20px" , marginBottom:"20px"}}></div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}}><a href="/With-The-Passage-Of-Time" className="DA_artName">With The Passage of Time</a></Col></Row>
    </Col>
  </Row>
  <Row>
    <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}}>     <div className="sky_col_border2"></div></Col>

     </Row>
  <Row>
    <div className="sky_space"></div>
      {/*}  <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>*/}
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Hsiao-Hsia Pan</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">Taiwan</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/General-Rock-Green-Island"><img style={{width:"100%", height:"auto"}}src={peter_profile}></img></a></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}>| Art Works |</div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col"  ><a href="/General-Rock-Green-Island" className="DA_artName">General Rock Green Island</a> </Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
    <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Dumas Temu</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">Taiwan</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a  href="/Gazing-In-Holy-Ridge"><img style={{width:"100%", height:"auto"}}src={huang_profile}></img></a></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}>| Art Works |</div></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <a  href="/Gazing-In-Holy-Ridge"className="DA_artName">Gazing in Holy Ridge</a></Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
    <Row><Col xl={{span:12}} lg={{span:12}}   md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>Estrella Chuang</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">Taiwan</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Boat-In-The-Sun-Moon-Lake"><img style={{width:"100%", height:"auto"}}src={star_profile}></img></a></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}>| Art Works |</div></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <a href="/Boat-In-The-Sun-Moon-Lake"className="DA_artName">The Boat in the Sun Moon Lake</a></Col></Row>
  </Col>
  </Row>
  <div className="sky_space"></div>

</div>
);
}

export default Dekstop_Artist;
