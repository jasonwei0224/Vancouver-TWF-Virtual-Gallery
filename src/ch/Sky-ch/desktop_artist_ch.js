import React from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";

import ProgramInfoThinLine from '../../programInfoThinLine';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../../modules/MainContents_Important"
import Button1 from "../../modules/Button1";
import Footer from "../footer-ch";
import SkyImageGallery from "../../skyImageGallery";
import './sky-ch.css'
import './desktop_artist_ch.css'
import SkyArtist from '../../Sky/sky.css';
import Slider from '../../Sky/img_slider_final_sky'
import ArtistList from '../../Sky/ArtistList';

import sara1 from '../../assets/Sara1.jpg';
import sara2 from '../../assets/Sara2.jpg';
import valerie from '../../assets/Valerie.jpg';
import star from '../../assets/心星.jpg';
import peter from '../../assets/潘小俠.jpg';
import p1 from '../../assets/阿比1.jpg';
import p2 from '../../assets/阿比2.jpg';
import huang from '../../assets/黃約農.jpg'

import sara_profile from '../../assets/人物照-Sara.jpg';
import huang_profile from '../../assets/人物照 -黃約農.jpg';
import valerie_profile from '../../assets/人物照-Valerie.jpg';
import peter_profile from '../../assets/人物照-潘小俠.jpg';
import star_profile from '../../assets/人物照-心星.jpg';
import p1_profile from '../../assets/人物照-伊顯玲.jpg'

import sky_image1 from '../../assets/SKY_top_IMAGE-1.jpg'
import sky_image2 from '../../assets/SKY_top_IMAGE-2.jpg'

import sky_cell_image1 from'../../assets/SKY_top_IMAGE-1_Cell.jpg';
import sky_cell_image2 from'../../assets/SKY_top_IMAGE-2_Cell.jpg';
function Dekstop_Artist() {

return (
  <div className="sky_desktop_artists">
  <Row>
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name" style={{textAlign:"center"}}>Sara Boychuk</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_country"style={{textAlign:"center"}}>加拿大</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={sara_profile}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  style={{textAlign:"center", fontWeight:"bold"}}className="DA_first_col" ><div  ><a className="DA_artName_ch" href="/Hidden-In-The-Clouds-ch">撥雲見日</a></div></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><div style={{borderBottom:"1px solid #2f6e79", paddingBottom:"20px" , marginBottom:"20px"}}></div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}   style={{textAlign:"center", fontWeight:"bold"}}><a href="/Pause-ch"  className="DA_artName_ch" >雲止時刻</a></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} >
      <Row><Col xl={{span:12}} lg={{span:12}} style={{textAlign:"center"}} className="sky_artist_name">Valerie Durant</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}} className="sky_artist_country">加拿大</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={valerie_profile}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}}  className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}  ><a  href="/Infinite-Sky-For-Evertt-ch" className="DA_artName_ch" >無垠的天空</a></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}}>
      <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name_mobile" style={{textAlign:"center"}}>伊顯玲</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}} className="sky_artist_country">台灣</Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={p1_profile}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}><a href="/Visible-Or-Invisible-ch" className="DA_artName_ch">可見與不可見的</a> </Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  ><div style={{borderBottom:"1px solid #2f6e79", paddingBottom:"20px" , marginBottom:"20px"}}></div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}}  ><a href="/With-The-Passage-Of-Time-ch" className="DA_artName_ch">時間的流逝</a></Col></Row>
    </Col>
  </Row>
  <Row>
    <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}}>     <div className="sky_col_border2"></div></Col>

     </Row>
  <Row>
    <div className="sky_space"></div>
      {/*}  <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>*/}
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>潘小俠</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">台灣</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={peter_profile}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}><a href="/General-Rock-Green-Island-ch" className="DA_artName_ch">綠島將軍岩</a> </Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
    <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>黃約農</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">台灣</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={huang_profile}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}> <a  href="/Gazing-In-Holy-Ridge-ch"className="DA_artName_ch">凝視聖稜線</a></Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
    <Row><Col xl={{span:12}} lg={{span:12}}   md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>莊心瑀</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} className="sky_artist_country">台灣</Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={star_profile}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" > <div style={{color:"#2f6e79"}}> | 作品 |</div></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="DA_first_col"style={{textAlign:"center", fontWeight:"bold"}}   > <a href="/Boat-In-The-Sun-Moon-Lake-ch"className="DA_artName_ch">日月潭四手網船</a></Col></Row>
  </Col>
  </Row>
  <div className="sky_space"></div>

</div>
);
}

export default Dekstop_Artist;
