import React from 'react';
import SkyArtist from './skyArtist-ch';
import huang_profile from '../../assets/人物照 -黃約農.jpg';

import sara_profile from '../../assets/人物照-Sara.jpg';
import valerie_profile from '../../assets/人物照-Valerie.jpg';
import peter_profile from '../../assets/人物照-潘小俠.jpg';
import star_profile from '../../assets/人物照-心星.jpg';
import p1_profile from '../../assets/人物照-伊顯玲.jpg'

import sara1 from '../../assets/Sara1.jpg';
import sara2 from '../../assets/Sara2.jpg';
import valerie from '../../assets/Valerie.jpg';
import star from '../../assets/心星.jpg';
import peter from '../../assets/潘小俠.jpg';
import p1 from '../../assets/阿比1.jpg';
import p2 from '../../assets/阿比2.jpg';
import huang from '../../assets/黃約農.jpg'

import Slider from '../../Sky/img_slider_final_sky'

function SkyArtist3() {

    var text =`  這張照片訴說著看見溫哥華日落美景的簡單喜悅。人們的生活總是被工作追著跑，其壓力可想而之。有時，我們需要稍做停歇；天空則是能提供適時的提點及展望。這張照片是在人們總愛待在室內的下雨天後拍攝的。只要耐心等候，整片天空及整座城市將籠罩在美麗的夕陽餘暉之下。
    `

  var artistInfo=`身為一位護理師和攝影師，很多事總是不斷地提醒著我，我們每一個人都生活在同一片天空之下。我對於大自然以及戶外攝影有著極大的熱情，因為我總覺得它能夠把每一個人團結相聚在一起。`


    var images = [sara1, sara2]

      return (
      <div>
        <img src={sara2} style={{width:"100%", height:"auto"}}></img>

      <SkyArtist
        artName="雲止時刻"
        title="SARA BOYCHUK"
        location="加拿大"
        shareURL="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FPause-ch&amp;src=sdkpreparse"
        content={text}
        artistInfo={artistInfo}
        profile={sara_profile}
        artwork={sara2}
        fb=""
        ig="https://www.instagram.com/saraboychukphoto"
        yt=""
        tw=""
        other="https://www.saraboychuk.com"
        fbDisplay="none"
        igDisplay="inline-block"
        twitterDisplay="none"
        ytDisplay="none"
        otherDisplay="inline-block"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1="/Gazing-In-Holy-Ridge-ch"
        url2="/General-Rock-Green-Island-ch"
        url3="/Hidden-In-The-Clouds-ch"
        url4="/Infinite-Sky-For-Everett-ch"
        url5="/Boat-In-The-Sun-Moon-Lake-ch"
        url6="/Visible-Or-Invisible-ch"
        url7="/With-The-Passage-Of-Time-ch"
        textName1="凝視聖稜線"
        textName2="綠島將軍岩"
        textName3="撥雲見日"
        textName4="無垠的天空"
        textName5="日月潭四手網船"
        textName6="可見與不可見的"
        textName7="時間的流逝"
        name = "SARA BOYCHUK"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
