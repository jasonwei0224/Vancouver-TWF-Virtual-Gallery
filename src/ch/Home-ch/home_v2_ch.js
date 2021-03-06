import React, { Component, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "../../homeComponents/homeCss/homeMain.css";
import "./homeMain-ch.css"
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../../assets/homepage_placeholder_lg.jpg';
import FooterCH from "../footer-ch";

import we_are_all_home_tor from '../../assets/V2-共同面對的我們  word.jpg';
import we_are_all_home_hover from '../../assets/V2-共同面對的我們  only.jpg'
import apple_home from'../../assets/V-保羅的蘋果 Word.jpg';
import apple_home_hover from '../../assets/V-保羅的蘋果 only.jpg';
import chinese_home from '../../assets/V-趣中國化 word.jpg';
import chinese_home_hover from '../../assets/V-趣中國化 only.jpg'
import mirror_home_tor from '../../assets/V-鏡子 w word.jpg';
import mirror_home_hover from '../../assets/V-鏡子 only.jpg';
import otherside_tor from '../../assets/V-一罩之隔 w word.jpg';
import otherside_hover from '../../assets/V-一罩之隔 only.jpg'
import people_and_mask_tor from '../../assets/V-傲慢與偏見 w word .jpg';
import people_and_mask_hover from '../../assets/V-傲慢與偏見 only.jpg'
import sky_home_tor from '../../assets/V-天空 w word.jpg';
import sky_home_hover from '../../assets/V-天空 only.jpg'
import sky_online from "../../assets/V-同一片天計畫word .jpg"
import sky_online_hover from '../../assets/V-同一片天計畫 only.jpg'
import diff_online from "../../assets/V-共同面對的我們 - online word .jpg"
import diff_online_hover from "../../assets/V-共同面對的我們 - online only .jpg"

import mask_mobile from "../../assets/V-傲慢與偏見-ch word.jpg"
import mask_mobile_hover from "../../assets/V-傲慢與偏見-ch.jpg"
import apple_mobile from "../../assets/V-保羅蘋果-ch word.jpg"
import apple_mobile_hover from "../../assets/V-保羅蘋果-ch.jpg"
import otherside_mobile from "../../assets/V-一罩之隔-ch word.jpg"
import otherside_mobile_hover from "../../assets/V-一罩之隔-ch.jpg"
import diff_online_mobile from "../../assets/V-共同面對的我們 online-ch word.jpg"
import diff_online_mobile_hover from "../../assets/V-共同面對的我們 online-ch.jpg"
import diff_mobile from "../../assets/V-共同面對的我們-ch word.jpg"
import diff_mobile_hover from "../../assets/V-共同面對的我們-ch.jpg"
import sky_online_mobile from "../../assets/V-同一片天計劃-ch word.jpg"
import sky_online_mobile_hover from "../../assets/V-同一片天計劃-ch.jpg";
import sky_mobile from "../../assets/V-天空-ch word.jpg"
import sky_mobile_hover from "../../assets/V-天空-ch.jpg"
import mirror_mobile from "../../assets/V-鏡子-ch word.jpg"
import mirror_mobile_hover from "../../assets/V-鏡子-ch.jpg"
import chinese_mobile from "../../assets/V-趣中國化-ch word.jpg"
import chinese_mobile_hover from "../../assets/V-趣中國化-ch.jpg"

import placeHolder from "../../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import together_ch from '../../assets/together_ch.jpg'
import diversity_ch from '../../assets/diversity_ch.jpg';
import behind_ch from '../../assets/behind_ch.jpg';
import Slider_home from "../../modules/img_slider_final_home2";
import HoverImage from "react-hover-image"
import { SocialIcon } from 'react-social-icons';

import DVBIALOGO from "../../assets/DVBIA.jpg";


function Home2() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const useMountEffect = (fun) => useEffect(fun, [])
  // useMountEffect(() => scrollToRef(myRef))
  const myRef = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)

  var text = `世界的紛亂，可能是我們人沒有給彼此空間；\n 大自然的抗議，可能是我們沒有跟它保持距離。\n 藝術家具有冒險的精神，挑戰現實的勇氣。\n文字無法傳達的，讓畫面來說話；\n 感受不到的溫度，讓顏色來點燃。\n在這裡欣賞藝術家的作品，唯一需要的是時間與空間 \n\n `

  var text2= `線上互動藝廊節目，特別感謝此技術團隊的付出`
  var creators = `Jason Wei / Gina Kim / Sangwook Yun / Eric Chang / Jessica Chu / Flemming Chow
   Yuni Hur / Sherry Guo`
var info = `展覽日期 / 九月十五日至九月二十七日
展覽場地 / 女皇劇院廣場展出
`
var info2=`*每晚10點熄燈`

    return (

        <div id="homeMainDiv">
        <Row id="homeFirstRow">
          <div id="homeTopSection">
              <Row id="topSectionRow">
                  <Col className="firstCols">
                    <div className="firstColTitle">選自社區朋友提供的天空照片</div>
                      <Slider_home/>
                  </Col>
                  <Col id="projectsScroll">
                    <div id="projectsScrollingSection">
                      <div className="ScrollableTitle">請點選藝廊主題欣賞精采作品 </div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:12, offset:0}} className="projectCols">
                                    <img  onClick={()=>scrollToRef(myRef)} id="projectImage" src={diversity_ch}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:12, offset:0}} className="projectCols">
                                    <img  onClick={()=>scrollToRef(myRef2)} id="projectImage" src={behind_ch}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow2">
                                <Col xl={{span:12, offset:0}} className="projectCols">
                                    <img  onClick={()=>scrollToRef(myRef3)} id="projectImage" src={together_ch}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="emptySpace"></div>
                    </div>
                  </Col>
              </Row>
          </div>
        </Row>
        <HomeMobileIntro/>
            {/*<HomeSecondSection id="homeSecondSection" header={text}/>
        <div id="homeThirdSection">
            <span ref ={myRef}><HomeColoredHeader2 title="我跟你的相同，就是我們都不同"/></span>
              <a href=""><HoverImage className="home_image"hoverSrc ={sky_home_hover}src={sky_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" hoverSrc ={we_are_all_home_hover} src={we_are_all_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>

            <a href=""><HoverImage className="home_image" hoverSrc ={mirror_home_hover} src={mirror_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" hoverSrc ={chinese_home_hover} src={chinese_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <span  ref ={myRef2} ><HomeColoredHeader2 title="口罩之說 " image={homepage_placeholder_lg}/></span>
            <a href=""><HoverImage className="home_image" hoverSrc ={otherside_hover} src={otherside_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" hoverSrc ={apple_home_hover} src={apple_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" hoverSrc ={people_and_mask_hover} src={people_and_mask_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <span  ref ={myRef3} ><HomeColoredHeader2 title="分享你的照片 " image={homepage_placeholder_lg}/></span>
            <a href=""><HoverImage className="home_image" hoverSrc ={diff_online_hover} src={diff_online} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <a href=""><HoverImage className="home_image" hoverSrc ={sky_online_hover} src={sky_online} style={{width:'100%', height:"auto"}}></HoverImage></a>


          </div>
          <Row>
            <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} md={{span:10, offset:1}} sm={{span:10, offset:1}} className="sm_col_desktop">
              <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestVancouver/"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://twitter.com/VTaiwanfest"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCxi_YzQvxZrSaa_OQDsOtEg"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://www.instagram.com/taiwanfest.vancouver/"/>

            </Col>
          </Row>
          <div id="homeThirdSectionMobile">

            <HomeColoredHeader title="我跟你的相同，就是我們都不同"/>
              <HomeMobileProject url="" type="裝置藝術" title="天空" image={sky_mobile}  hover={sky_mobile_hover}/>
              <HomeMobileProject url=""type=" 線上互動" title="我跟你的相同，就是我們都不同" image={diff_mobile}  hover={diff_mobile_hover}/>
              <HomeMobileProject url=""type="數位創作" title="「趣」中國化" image={chinese_mobile}  hover={chinese_mobile_hover}/>
              <HomeMobileProject url=""type="插畫創作" title="鏡子" image={mirror_mobile}  hover={mirror_mobile_hover}/>

            <HomeColoredHeader url=""title="口罩之說" image={homepage_placeholder_lg}/>
              <HomeMobileProject url=""type="數位創作" title="一罩之隔" image={otherside_mobile}  hover={otherside_mobile_hover}/>
              <HomeMobileProject url=""type="數位創作" title="保羅的蘋果" image={apple_mobile}  hover={apple_mobile_hover}/>
              <HomeMobileProject url=""type="素描創作" title="傲慢與偏見"image={mask_mobile}  hover={mask_mobile_hover}/>
            <HomeColoredHeader title="分享你的照片 " image={homepage_placeholder_lg}/>
              <HomeMobileProject url=""type=" 線上互動" title="共同面對的我們" image={diff_online_mobile}  hover={diff_online_mobile_hover}/>
              <HomeMobileProject url=""type="線上互動" title="頭頂同一片天計畫"image={sky_online_mobile}  hover={sky_online_mobile_hover}/>
                <Row>
                  <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} md={{span:4, offset:4}} sm={{span:10, offset:1}} className="sm_col">
                    <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestVancouver/" style={{ height: 100, width: 100 }} />
                    <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://twitter.com/VTaiwanfest" style={{ height: 100, width: 100 }} />
                    <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCxi_YzQvxZrSaa_OQDsOtEg" style={{ height: 100, width: 100 }} />
                    <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://www.instagram.com/taiwanfest.vancouver/" style={{ height: 100, width: 100 }} />
                  </Col>
                </Row>
          </div>*/}
        <HomeSecondSection id="homeSecondSection" header={text}/>
        <div id="homeThirdSection">
          <span ref ={myRef}><HomeColoredHeader2 title="我跟你的相同，就是我們都不同"/></span>
            <a href="/Sky-ch"><HoverImage className="home_image"hoverSrc ={sky_home_hover}src={sky_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/IAmDifferent-ch"><HoverImage className="home_image" hoverSrc ={we_are_all_home_hover} src={we_are_all_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>

          <a href="/Mirror-ch"><HoverImage className="home_image" hoverSrc ={mirror_home_hover} src={mirror_home_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/UnbeingChinese-ch"><HoverImage className="home_image" hoverSrc ={chinese_home_hover} src={chinese_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
        <span  ref ={myRef2} ><HomeColoredHeader2 title="口罩之說 " image={homepage_placeholder_lg}/></span>
          <a href="/OtherSideOfMask-ch"><HoverImage className="home_image" hoverSrc ={otherside_hover} src={otherside_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/PaulsApple-ch"><HoverImage className="home_image" hoverSrc ={apple_home_hover} src={apple_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/PeopleAndMask-ch"><HoverImage className="home_image" hoverSrc ={people_and_mask_hover} src={people_and_mask_tor} style={{width:'100%', height:"auto"}}></HoverImage></a>
        <span  ref ={myRef3} ><HomeColoredHeader2 title="分享你的照片 " image={homepage_placeholder_lg}/></span>
          <a href="/IAmDifferentForm-ch"><HoverImage className="home_image" hoverSrc ={diff_online_hover} src={diff_online} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/Sky_Form-ch"><HoverImage className="home_image" hoverSrc ={sky_online_hover} src={sky_online} style={{width:'100%', height:"auto"}}></HoverImage></a>


        </div>
        <Row>
          <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} md={{span:10, offset:1}} sm={{span:10, offset:1}} className="sm_col_desktop">
            <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestVancouver/"/>
            <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://twitter.com/VTaiwanfest"/>
            <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCxi_YzQvxZrSaa_OQDsOtEg"/>
            <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://www.instagram.com/taiwanfest.vancouver/"/>

          </Col>
        </Row>
        <div id="homeThirdSectionMobile">

          <HomeColoredHeader title="我跟你的相同，就是我們都不同"/>
            <HomeMobileProject url="/Sky-ch" type="裝置藝術" title="天空" info={info}  info2={info2} image={sky_mobile}  hover={sky_mobile_hover}/>
            <HomeMobileProject url="/IAmDifferent-ch"type=" 線上互動" title="我跟你的相同，就是我們都不同" image={diff_mobile}  hover={diff_mobile_hover}/>
            <HomeMobileProject url="/UnbeingChinese-ch"type="數位創作" title="「趣」中國化" image={chinese_mobile}  hover={chinese_mobile_hover}/>
            <HomeMobileProject url="/Mirror-ch"type="插畫創作" title="鏡子" image={mirror_mobile}  hover={mirror_mobile_hover}/>

          <HomeColoredHeader url=""title="口罩之說" image={homepage_placeholder_lg}/>
            <HomeMobileProject url="/OtherSideOfMask-ch"type="數位創作" title="一罩之隔" image={otherside_mobile}  hover={otherside_mobile_hover}/>
            <HomeMobileProject url="/PaulsApple-ch"type="數位創作" title="保羅的蘋果" image={apple_mobile}  hover={apple_mobile_hover}/>
            <HomeMobileProject url="/PeopleAndMask-ch"type="素描創作" title="傲慢與偏見"image={mask_mobile}  hover={mask_mobile_hover}/>
          <HomeColoredHeader title="分享你的照片 " image={homepage_placeholder_lg}/>
            <HomeMobileProject url="/IAmDifferentForm-ch"type=" 線上互動" title="共同面對的我們" image={diff_online_mobile}  hover={diff_online_mobile_hover}/>
            <HomeMobileProject url="/Sky_Form-ch"type="線上互動" title="頭頂同一片天計畫"image={sky_online_mobile}  hover={sky_online_mobile_hover}/>
            <Row>
              <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} md={{span:10, offset:1}} sm={{span:10, offset:1}} className="sm_col">
                <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestVancouver/" style={{ height: 100, width: 100 }} />
                <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://twitter.com/VTaiwanfest" style={{ height: 100, width: 100 }} />
                <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCxi_YzQvxZrSaa_OQDsOtEg" style={{ height: 100, width: 100 }} />
                <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://www.instagram.com/taiwanfest.vancouver/" style={{ height: 100, width: 100 }} />
              </Col>
            </Row>
        </div>
        <div>
          <Row>
              <Col xl={{span:8, offset:2}} lg={{span:6, offset:2}} sm={{span:10, offset:1}}>
                <div className="home_border_top" style={{borderTop:"solid 1px #4A9C2C"}}/>
              </Col>
          </Row>
          <Row>
            <Col xl={{span:4, offset:4}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_title">-特別感謝-</Col>
          </Row>
          <Row>
            <Col xl={{span:6, offset:3}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_text">{text2}</Col>
          </Row>
          <Row>
            <Col xl={{span:6, offset:3}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_name">{creators}</Col>
          </Row>
          <Row>
              <Col xl={{span:8, offset:2}} lg={{span:6, offset:2}} sm={{span:10, offset:1}}>
                <div className="home_border_bottom"style={{borderTop:"solid 1px #4A9C2C"}}/>
              </Col>
          </Row>
          <Row>
            <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}} sm={{span:10, offset:1}} className="sponsor_logo">
              <a href="https://www.dtvan.ca/"  target="_blank" rel="noopener noreferrer"><img src={DVBIALOGO} style={{width:"100%", height:"auto"}}></img></a>
            </Col>
          </Row>
        </div>
          <FooterCH></FooterCH>
            {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
        </div>

    )
}

export default Home2;
