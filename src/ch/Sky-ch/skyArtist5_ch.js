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

    var text =`這張照片是在某個雲彩多變的日子拍攝的。當所有雲朵漸漸吞噬著天空，僅露出某個山頭，這是個多麼夢幻的時刻呀。彷彿在暴雨來襲時，你依舊昂首。即使天氣無法永遠依我們所願，只要樂觀面對，仍舊能發覺它的美好。
`

  var artistInfo=`身為一位護理師和攝影師，很多事總是不斷地提醒著我，我們每一個人都生活在同一片天空之下。我對於大自然以及戶外攝影有著極大的熱情，因為我總覺得它能夠把每一個人團結相聚在一起。`


    var images = [sara1, sara2]

      return (
      <div>
      <img src={sara1} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="撥雲見日"
        title="SARA BOYCHUK"
        location="加拿大"
        shareURL="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FHidden-In-The-Clouds-ch&amp;src=sdkpreparse"
        content={text}
        artwork={sara1}
        artistInfo={artistInfo}
        profile={sara_profile}
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
        url3="/Infinite-Sky-For-Everett-ch"
        url4="/Pause-ch"
        url5="/Boat-In-The-Sun-Moon-Lake-ch"
        url6="/Visible-Or-Invisible-ch"
        url7="/With-The-Passage-Of-Time-ch"
        textName1="凝視聖稜線"
        textName2="綠島將軍岩"
        textName3="無垠的天空"
        textName4="雲止時刻"
        textName5="日月潭四手網船"
        textName6="可見與不可見的"
        textName7="時間的流逝"
        name = "SARA BOYCHUK"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
