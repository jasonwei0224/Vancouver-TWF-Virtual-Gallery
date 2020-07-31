import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import HoverImage from "react-hover-image"
import "./homeCss/homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../assets/homepage_placeholder_lg.jpg';
import Footer from '../footer-temp';
import homeImage from './homeImage';
import we_are_all_home_van1 from '../assets/V-We are all in this toghther word.jpg'
import we_are_all_home_van1_hover from '../assets/V-We are all in this toghther only.jpg'
import we_are_all_home_van from '../assets/V-We are all in this toghther - online word .jpg';
import we_are_all_home_van_hover from "../assets/V-We are all in this toghther - online only .jpg";

import apple_home from'../assets/V-Pauls Apple Word.jpg';
import apple_home_hover from '../assets/V-Pauls Apple only.jpg'
import chinese_home from '../assets/V-UN Being chinese word.jpg';
import chinese_home_hover from '../assets/V-Un being Chinese only.jpg'
import mirror_home_van from '../assets/V-Mirrors w word.jpg';
import mirror_home_van_hover from '../assets/V-Mirrors only.jpg';
import otherside_van from '../assets/V-The other side of mask w word.jpg';
import otherside_van_hover from '../assets/V-the other side of mask only.jpg'
import people_and_mask_van from '../assets/V-People and Mask w word .jpg';
import people_and_mask_van_hove from '../assets/V-People and mask only.jpg'
import sky_home_van from '../assets/V-Sky w word.jpg';
import sky_home_van_hover from "../assets/V-Sky only.jpg"
import sky_home_van2 from '../assets/V-Under the Same Sky Project word .jpg';
import sky_home_van2_hover from '../assets/V-Under the Same Sky Project only.jpg'

import mirror_mobile from '../assets/V-Mirrios-en word.jpg';
import mirror_mobile_hover from '../assets/V-Mirrios-en.jpg'
import sky_mobile from '../assets/V-SKY-en word.jpg';
import sky_mobile_hover from'../assets/V-SKY-en.jpg';
import sky2_mobile from '../assets/V-under the same sky project-en word.jpg';
import sky2_mobile_hover from '../assets/V-under the same sky project-en.jpg';
import diff_mobile from '../assets/V-We are in this together-en word.jpg'
import diff_mobile_hover from '../assets/V-We are in this together-en.jpg'
import diff2_mobile from '../assets/V-We are in this together-en word.jpg'
import diff2_mobile_hover from '../assets/V-We are in this together online-en.jpg';
import chinese_mobile from '../assets/V-UN being Chinese-en word.jpg';
import chinese_mobile_hover from '../assets/V-We are in this together-en.jpg';
import mask_mobile from '../assets/V-The other side of mask-en word.jpg';
import mask_mobile_hover from '../assets/V-The other side of mask-en.jpg'
import pauls_mobile from '../assets/V-Puals Apple-en word.jpg';
import pauls_mobile_hover from '../assets/V-Puals Apple-en.jpg';
import people_and_mask_mobile from '../assets/V-People and mask-en word.jpg';
import people_and_mask_mobile_hover from '../assets/V-People & mask-en.jpg';

import $ from "jquery";
import Slider_home from "../modules/img_slider_final_home2";
import behind_top from '../assets/behind.jpg'
import diversity_top from '../assets/diversity.jpg';
import together_top from '../assets/together.jpg';
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";


var text = `The world seems to have lost its order because we forget to give others space; nature seems to be protesting because we forget to be humble. Artists are risk takers and they dare to challenge the reality of our society.  For things words can’t express, let pictures do the talking.  For the warmth people can’t feel, maybe colours can ignite.  To appreciate our artists here, time and space are all is required. \n\n  The galleries of your photos are open now. Galleries of all participating artists will be open starting Septebmer 5th.`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const useMountEffect = (fun) => useEffect(fun, [])
function Home2() {


  const myRef = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  useMountEffect(() => scrollToRef(myRef))

    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
          <div id="homeTopSection">
              <Row id="topSectionRow">
                  <Col className="firstCols">
                    <div className="firstColTitle">SELECTED SKY PHOTOS <br></br>FROM PEOPLE LIKE YOU</div>
                      <Slider_home/>
                      {/* <img id='leftImage' src={placeHolder}/> */}
                  </Col>
                  <Col id="projectsScroll">
                    <div id="projectsScrollingSection">
                      <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                  <img  onClick={()=>scrollToRef(myRef)} id="projectImage" src={diversity_top}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                  <img  onClick={()=>scrollToRef(myRef2)} id="projectImage" src={behind_top}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow2">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                  <img  onClick={()=>scrollToRef(myRef3)} id="projectImage" src={together_top}/>
                                </Col>
                            </Row>
                        </div>
                      {/* <ProjectNameRight  url="/#section1" image={diversity_top} name="Mirrors"/>
                        <ProjectNameLeft image={behind_top} name="I am different, just like you"/>
                        <ProjectNameRight url="/#section1" image={together_top} name="Sky"/>
                        <ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
                        <div id="emptySpace"></div>
                    </div>
                  </Col>
              </Row>
          </div>
            {/*}<HomeTopSection/>*/}
        </Row>
        <HomeMobileIntro/>
        <HomeSecondSection id="homeSecondSection" header={text}/>
        <div id="homeThirdSection">

            <span  ref ={myRef} ><HomeColoredHeader2 id="section1" title="I'M DIFFERENT, JUST LIKE YOU!"></HomeColoredHeader2></span>

            <a href="/sky"><HoverImage src={sky_home_van}  hoverSrc={sky_home_van_hover} className="home_image" style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href="/IAmDifferent"><HoverImage className="home_image" src={we_are_all_home_van1}  hoverSrc={we_are_all_home_van1_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" src={mirror_home_van}  hoverSrc={mirror_home_van_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" src={chinese_home}   hoverSrc={chinese_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <span  ref ={myRef2} ><HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/></span>
            <a href=""><HoverImage className="home_image" src={otherside_van}  hoverSrc={otherside_van_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" src={apple_home}  hoverSrc={apple_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" src={people_and_mask_van}  hoverSrc={people_and_mask_van_hove} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <span ref ={myRef3}><HomeColoredHeader  title="SHARE YOUR PHOTOS" image={homepage_placeholder_lg}/></span>
                <a href="/IAmDifferentForm" ><HoverImage className="home_image" src={we_are_all_home_van}  hoverSrc={we_are_all_home_van_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
                <a href="/sky"><HoverImage className="home_image" src={sky_home_van2}  hoverSrc={sky_home_van2_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
          {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
        </div>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeMobileProject url="/Sky"type="INTSTALLATION" title="SKY" image={sky_mobile} hover={sky_mobile_hover}/>
            <HomeMobileProject url="IAmDifferent" type="INTERACTIVE GAME" title="WE ARE ALL IN THIS TOGETHER" image={diff_mobile}  hover={diff_mobile_hover}/>
              <HomeMobileProject url="" type="ILLUSTRATION" title="MIRRORS" image={mirror_mobile}  hover={mirror_mobile_hover}/>

            <HomeMobileProject url="" type="GRAPHIC ART" title="(UN) BEING CHINESE" image={chinese_mobile} hover={chinese_mobile_hover}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}  hover={sky_mobile}/>
            <HomeMobileProject url="" type="DIGITAL PAINTING" title="THE OTHER SIDE OF MASK" image={mask_mobile}  hover={mask_mobile_hover}/>
            <HomeMobileProject url="" type="DIGITAL PAINTING" title="PAUL'S APPLE" image={pauls_mobile}  hover={pauls_mobile_hover}/>
            <HomeMobileProject url="" type="SKETCH" title="PEOPLE AND MASK" image={people_and_mask_mobile} hover={people_and_mask_mobile_hover} />
            <HomeColoredHeader title="SHARE YOUR PHOTOS" image={homepage_placeholder_lg}/>
            <HomeMobileProject url="/IAmDifferentForm" type="INTERACTIVE GAME" title="WE ARE ALL IN THIS TOGETHER" image={diff2_mobile} hover={diff2_mobile_hover} />
            <HomeMobileProject url="/Sky" type="INTERACTIVE GAME" title="UNDER THE SAME SKY PROJECT" image={sky2_mobile} hover={sky2_mobile_hover}/>

        </div>
          <Footer content="&copy; 2020 ASIAN-CANADIAN SPECIAL EVENTS ASSOCIATION"></Footer>
        </div>
    )
}

export default Home2;
