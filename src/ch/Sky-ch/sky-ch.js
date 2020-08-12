import React from 'react';

import { Container } from "react-bootstrap";
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

function Sky() {

  const goToForm=()=> {
    window.location='Sky';
  };

  var images = [sara1, sara2, valerie, star, peter, p1, p2, huang]
var text=`在同一片藍天下，當一切顏色歸零(Colour Zero)，回到一個個獨立的個體，人們究竟有何不同?

無論我們身在方，都是看著同一片天空；無論我們的外表、性格多麼不同，都是被同一片天空包覆其下；無論我們背負何種人生境遇，都是在同一片天空下經歷悲歡離合。天空不問我們的身份性別、社經背景；不辨識我們來自什麼文化，說著哪一種語言，我們同樣都能在同一片天空中，看見炎熱的陽光、溫柔的月亮、靜謐的星空、雨後的彩虹。即便我們身體殘缺、內心傷痛，時而因愛歡喜，時而因恨哀愁，依然與世界上的每一個人一樣，每天迎接日出日落，無法避免風起雨落。天空不曾因為個人的不同而排拒過任何一個人，我們每一個人與其他生命萬物相同，都只是大自然的其中一部分。

當數字「8」轉為橫向成為「∞」無限符號，象徵天空的無邊無際、遼闊遠大。膚色、外貌、族裔、語言、文化，不會是限制人類理解彼此的界線；「∞」也象徵愛的永恆，當人們能互相欣賞不一樣的美麗，平等地認同彼此的存在價值，共同創造了人類永續未來的機會。

在加拿大台灣文化節活動期間，不只在溫哥華美術館前廣場能看到八座「天空」燈光裝置藝術作品，陪伴溫哥華人度過黎明與黑夜。即使你人不在溫哥華，甚至不在加拿大，你都可以隨時拍下【下午三點】的天空照片上傳分享，立即加入我們 ! 在夏天的尾聲，透過看著同一片天空的不同風景，感受不同的空間氛圍，不受地域和時間限制，貼近彼此，相互作伴 !`

  var text2=`在地球上不同位置的我們，相約在同一時刻拍下天空的包羅萬象。

美麗的天空一直包容著我們每一個人的不一樣，無論是缺陷或完美；
人類的命運因為疫情改變了，種族之間的歧視日漸嚴重讓人心惶惶；
我們抬頭望望藍天，看到希望、感受到空間、見識到渺小，誰貴誰賤?

我們都不一樣，我們也都一樣 !

加拿大台灣文化節邀請您追蹤我們的 Facebook 一起拍攝分享【下午三點】的天空，與世界一起反歧視、追求平等。期待有更多人看到您的天空攝影作品 !`

  return (
    <div>
      <Container fluid style={{padding:"0"}}>
     <Slider images={images}/>

        <ProgramInfoThinLine
          subtitle="大型實體裝置藝術"
          title="天空"
          artistName="藝術家暨策展人：宋浩芬"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"
          color="#246f79"
          ></ProgramInfoThinLine>

        <SkyImageGallery link1="/SkyArtist1" link2="/SkyArtist2" country="Canadian Artists" artist1="Sara Boychuk" artist2="Valerie Durant" image1={sara_profile} image2={valerie_profile}></SkyImageGallery>
        <SkyImageGallery link1="/SkyArtist3" link2="/SkyArtist4" country="Taiwanese Artists"artist1="Hsiao-Hsia Pan" artist2="Dumas Temu" image1={peter_profile} image2={huang_profile}></SkyImageGallery>
        <SkyImageGallery link1="/SkyArtist5" link2="/SkyArtist6" country="Taiwanese Artists"artist1="Hsien-ling Yin" artist2="Estrella Chuang" image1={p1_profile} image2={star_profile}></SkyImageGallery>

        <ArtistList></ArtistList>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>
        <Second_Title secondTitle="我跟你的相同，就是我們都不同" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important contents={text2}></MainContents_Important>
        <div className="sky_space"></div>
        <Button1 onclick={goToForm} title="UPLOAD YOUR PHOTO" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default Sky;
