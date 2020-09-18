import React from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";

import ProgramInfoThinLineCH from '../programInfoThinLineCH';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../../modules/MainContents_Important"
import Button1 from "../../modules/ButtonCh";
import Footer from "../footer-ch";
import SkyImageGallery from "../../skyImageGallery";
import './sky-ch.css'
import SkyArtist from '../../Sky/sky.css';
import Slider from '../../Sky/img_slider_final_sky'
import Slider2 from '../../Sky/img_slider_final_sky2'
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
import Dekstop_Artist from './desktop_artist_ch';

import sky_image1 from '../../assets/SKY_top_IMAGE-1.jpg'
import sky_page1 from '../../assets/sky_page1.jpg';
import sky_image2 from '../../assets/SKY_top_IMAGE-2.jpg'

import sky_cell_image1 from'../../assets/SKY_top_IMAGE-1_Cell.jpg';
import sky_cell_image2 from'../../assets/SKY_top_IMAGE-2_Cell.jpg';

import Second_Title_Green from "../../modules/Second_Title_Green"
import Second_Title_Red from "../../modules/Second_Title_Red"
import Second_Title_ch_No_margin from "../../modules/Second_TitleCh_NoMargin"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch"

import sky_image_desktop from "../../assets/sky_pic_desktop.jpg";
import sky_image_mobile from "../../assets/sky_pic_mobile.jpg";
import MainContents_Middle_Adonis_Notice from "../../modules/MainContents_Middle_Adonis_Notice_CH"

import ReactPlayer from "react-player";
import YouTubeEmbed from 'react-youtube-embed'
import sky_video from "../../assets/Sky.mp4";

function Sky() {

  const goToForm=()=> {
    window.location='Sky_Form-ch';
  };

  var images = [sky_page1, sky_image2]
  var images2 = [sky_cell_image1, sky_cell_image2]
var text=`在同一片藍天下，當一切顏色歸零(Colour Zero)，回到一個個獨立的個體，人們究竟有何不同?

無論我們身在何方，都是看著同一片天空；無論我們的外表、性格多麼不同，都是被同一片天空包覆其下；無論我們背負何種人生境遇，都是在同一片天空下經歷悲歡離合。天空不問我們的身份性別、社經背景；不辨識我們來自什麼文化，說著哪一種語言，我們同樣都能在同一片天空中，看見炎熱的陽光、溫柔的月亮、靜謐的星空、雨後的彩虹。即便我們身體殘缺、內心傷痛，時而因愛歡喜，時而因恨哀愁，依然與世界上的每一個人一樣，每天迎接日出日落，無法避免風起雨落。天空不曾因為個人的不同而排拒過任何一個人，我們每一個人與其他生命萬物相同，都只是大自然的其中一部分。
`

  var text2=`當數字「8」轉為橫向成為「∞」無限符號，象徵天空的無邊無際、遼闊遠大。膚色、外貌、族裔、語言、文化，不會是限制人類理解彼此的界線；「∞」也象徵愛的永恆，當人們能互相欣賞不一樣的美麗，平等地認同彼此的存在價值，共同創造了人類永續未來的機會。

在加拿大台灣文化節活動期間，不只在伊麗莎白女皇劇院廣場能看到八座「天空」燈光裝置藝術作品，陪伴溫哥華人度過黎明與黑夜。即使你人不在溫哥華，甚至不在加拿大，你都可以隨時拍下天空的照片上傳分享，立即加入我們 ! 在夏天的尾聲，透過看著同一片天空的不同風景，感受不同的空間氛圍，不受地域和時間限制，貼近彼此，相互作伴 !

`
var text3 =`在地球上不同位置的我們，相約在同一時刻拍下天空的包羅萬象。

美麗的天空一直包容著我們每一個人的不一樣，無論是缺陷或完美；
人類的命運因為疫情改變了，種族之間的歧視日漸嚴重讓人心惶惶；
我們抬頭望望藍天，看到希望、感受到空間、見識到渺小，誰貴誰賤?

我們都不一樣，我們也都一樣 !

加拿大台灣文化節邀請您追蹤我們的 Facebook 一起拍攝天空，與世界一起反歧視、追求平等。期待有更多人看到您的天空攝影作品 !
`
var stories = `從一種無色的心境開始，看到原住民對大自然的尊敬，這個大自然都一直為我們的人生作美麗的詮釋。 無論攀登雲峰的過程是如何的刻骨銘心，在這片天空下，我們永遠無法改變的是人類的渺小與脆弱。

時間帶著我們穿梭過不一樣的時空，也是在這片天空下，我們足跡就這樣層疊在地球上的每一個角落 。 為了可以讓世世代代可以得到這片天的庇蔭，是否我們更應該虛心與勇敢去擁抱多元、平等與自由的價值。`

var public_health=`由於本省正在努力以安全的方式重新開放經濟，並且讓越來越多的人可以恢復到新的常態，請遵循所有公共衛生準則以保護自己和他人免受COVID-19的侵害。個人應監控自己的健康狀況，若發現COVID-19的徵兆和症狀，或是身體不舒服，建議您此時待在家裡勿外出。在戶外和參觀展覽時，請遵守社交疏導措施。戴上口罩以保護自己和他人，尤其是在無法維持社交隔離（六英呎）的情況下。參與現場 Sky 的裝置藝術，您清楚並瞭解與COVID-19大流行有相關風險，ACSEA和我們的合作夥伴關心您的健康但不對任何因為參觀展覽所延伸的問題負責。`

var special_notice= `展覽日期 / 九月十五日至九月二十七日
展覽地點 / 女皇劇院廣場展出
`
var notice_small=`*每晚10點熄燈
`


  return (
    <div>
      <Container fluid style={{padding:"0"}}>
       {/*}<span className="desktop_slider_sky"><Slider images={images}/></span>
     <span className="mobile_slider_sky"><Slider2 images={images2}/></span>*/}
     <img  className="desktop_sky" src={sky_image_desktop}></img>
     <img className="mobile_sky"src={sky_image_mobile}></img>
        <ProgramInfoThinLineCH
          subtitle="大型實體裝置藝術"
          title="天空"
          artistName="策展人：宋浩芬"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FSky-ch&amp;src=sdkpreparse"
          color="#246f79"
          ></ProgramInfoThinLineCH>
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <YouTubeEmbed id="FRYSTXVuTOM"/>
            </Col>
            <div className="sky_space"></div>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>
          <div className="sky_mobile_artists">
          <Row>
            <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{ span:8, offset:1}} xs={{span:8, offset:1}} >
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name" style={{textAlign:"center"}}>Sara Boychuk</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_country"style={{textAlign:"center" , fontWeight:"bold"}}>加拿大</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Hidden-In-The-Clouds-ch"><img style={{width:"100%", height:"auto"}}src={sara_profile}></img></a></Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><a href="/Hidden-In-The-Clouds-ch"><Button bsPrefix="sky_art1_btn-ch" className="sky_art1_btn-ch">撥雲見日</Button></a></Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}  className="sky_col_border" ><a href="/Pause-ch"><Button  bsPrefix="sky_art2_btn-ch" className="sky_art2_btn-ch">雲止時刻</Button></a></Col></Row>
            </Col>
            <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
              <Row><Col xl={{span:12}} lg={{span:12}} style={{textAlign:"center"}} className="sky_artist_name">Valerie Durant</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center", fontWeight:"bold"}} className="sky_artist_country">加拿大</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a href="/Infinite-Sky-For-Everett-ch" ><img style={{width:"100%", height:"auto"}}src={valerie_profile}></img></a></Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}} className="sky_col_border2_ch"><a href="/Infinite-Sky-For-Everett-ch" > <Button bsPrefix="sky_art3_btn-ch" className="sky_art3_btn-ch">無垠的天空</Button></a></Col></Row>
            </Col>
            <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}}>
              <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name_mobile"  style={{textAlign:"center"}}>尹顯玲</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center", fontWeight:"bold"}} className="sky_artist_country">台灣</Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><a  href="/Visible-Or-Invisible-ch"><img style={{width:"100%", height:"auto"}}src={p1_profile}></img></a></Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><a  href="/Visible-Or-Invisible-ch"><Button bsPrefix="sky_art4_btn-ch" className="sky_art4_btn-ch">可見與不可見的</Button></a></Col></Row>
              <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}  className="sky_col_border"><a href="/With-The-Passage-Of-Time-ch"><Button bsPrefix="sky_art5_btn-ch" className="sky_art5_btn-ch">時間的流逝</Button></a></Col></Row>
            </Col>
            <div className="sky_space"></div>
                <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>
            <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile" style={{textAlign:"center"}}>潘小俠</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="sky_artist_country">台灣</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/General-Rock-Green-Island-ch"><img style={{width:"100%", height:"auto"}}src={peter_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><a href="/General-Rock-Green-Island-ch"><Button  bsPrefix="sky_art6_btn-ch" className="sky_art6_btn-ch">綠島將軍岩</Button></a></Col></Row>

          </Col>
          <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
            <Row><Col xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} className="sky_artist_name2_mobile"  style={{textAlign:"center"}}>黃約農</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="sky_artist_country">台灣</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Gazing-In-Holy-Ridge-ch" ><img style={{width:"100%", height:"auto"}}src={huang_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><a href="/Gazing-In-Holy-Ridge-ch" ><Button bsPrefix="sky_art7_btn-ch" className="sky_art7_btn-ch">凝視聖稜線</Button></a></Col></Row>

          </Col>
          <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
            <Row><Col xl={{span:12}} lg={{span:12}}   md={{span:12}} sm={{Sspan:12}} xs={{span:12}}  className="sky_artist_name2_mobile" style={{textAlign:"center"}}>莊心瑀</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="sky_artist_country">台灣</Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><a href="/Boat-In-The-Sun-Moon-Lake-ch"><img style={{width:"100%", height:"auto"}}src={star_profile}></img></a></Col></Row>
            <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><a href="/Boat-In-The-Sun-Moon-Lake-ch"><Button  bsPrefix="sky_art8_btn-ch" className="sky_art8_btn-ch">日月潭四手網船</Button></a></Col></Row>
          </Col>
          </Row>
          <div className="sky_space"></div>
          <Row>

          </Row>
          </div>

          <Dekstop_Artist></Dekstop_Artist>
            <Second_Title_Green secondTitle="作品故事："></Second_Title_Green>
            <MainContents_Middle_Adonis style={{color:"#4e9b16"}} color="#4e9b16" font="adonis-web" contents={stories}></MainContents_Middle_Adonis>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text2}></MainContents_Middle_Adonis>

          <MainContents_Middle_Adonis_Notice style={{fontWeight:"bold"}} color="#EF5797" fontWeight= "bold" font="Sans-serif" contents={special_notice} contents2={notice_small}></MainContents_Middle_Adonis_Notice>

          <Second_Title_Red secondTitle="疫情健康提醒："></Second_Title_Red>
          <MainContents_Middle style={{color:"#0C3866"}} font="sofia-pro" contents={public_health}></MainContents_Middle>
          <div className="sky_space2"></div>
        <Second_Title_ch_No_margin secondTitle="同一片天計畫" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_ch_No_margin>
          <MainContents_Important contents={text3}></MainContents_Important>

        <Button1 onclick={goToForm} title="上傳照片" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FSky-ch&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 加拿大亞裔活動協會"></Footer>
    </div>
  );
}

export default Sky;
