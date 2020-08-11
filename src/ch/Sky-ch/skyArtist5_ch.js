import React from 'react';
import SkyArtist from './skyArtist';
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
  var text2 = `

  這張照片訴說著看見溫哥華日落美景的簡單喜悅。人們的生活總是被工作追著跑，其壓力可想而之。有時，我們需要稍做停歇；天空則是能提供適時的提點及展望。這張照片是在人們總愛待在室內的下雨天後拍攝的。只要耐心等候，整片天空及整座城市將籠罩在美麗的夕陽餘暉之下。`

  var artistInfo=`身為一位護理師和攝影師，很多事總是不斷地提醒著我，我們每一個人都生活在同一片天空之下。我對於大自然以及戶外攝影有著極大的熱情，因為我總覺得它能夠把每一個人團結相聚在一起。`


    var images = [sara1, sara2]

      return (
      <div>
      <Slider images={images}/>
      <SkyArtist
        artName="撥雲見日"
        title="SARA BOYCHUK"
        location="加拿大"
        content={text}
        bold="雲止時刻"
        contents2={text2}
        artistInfo={artistInfo}
        profile={sara_profile}
        fb=""
        ig="https://www.instagram.com/saraboychukphoto"
        yt=""
        tw=""
        other="https://www.saraboychuk.com"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1=""
        url2=""
        url3=""
        name = "SARA BOYCHUK"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
