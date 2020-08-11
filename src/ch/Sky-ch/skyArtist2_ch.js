import React from 'react';
import SkyArtist from './skyArtist';
import huang_profile from '../../assets/人物照 -黃約農.jpg';
import Slider from '../../Sky/img_slider_final_sky'


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
function SkyArtist2() {
    var text =`我很喜歡到日月潭拍日出，每次來這拍照，內心總是有一股平靜祥和的感覺。

四手網船是日月潭邵族早年為了捕魚作業方便而搭建的船屋，船屋是邵族人在日月潭捕魚時的主力船隻。隨著生態改變，漁獲量減少，靠捕魚維生的邵族人也不多了，許多四手網船也閒置著破舊不堪，而為了讓來日月潭遊玩的人還能見到四手網船，畫面這艘船是固定放著展示用的。

這艘四手網船，是我在日月潭拍攝日出時最喜歡拍攝的區域角度，除了在畫面中是點綴景色讓畫面更加分之外，也好像是捕捉著來到這裡的攝影師對於景色的期待與內心的平靜。

環繞著日月潭的雲海是很難遇到的景色，日月潭的水面上有時候只有薄薄的水霧，要看到這麼厚實的雲海真的不容易，就如同榮景不再的四手網船捕魚，人生和這片天空一樣總有許多不可預測的變化，自由的遊走人生每一個當下，就在那一片天空下好好享受與珍惜每個當下。`

  var artistInfo=`「我不是在拍照的路上就是正在拍照！」

台灣 canon 課程講師和合作攝影師，極度熱愛攝影和旅遊，「攝癮分子」極度強烈，總是有著滿滿的攝影魂，攝影對她來說就像氧氣一樣是必須的存在。

啟蒙於爸爸對家庭愛的紀錄，還有一幅美到讓她嘆為觀止的合歡山雪景夕照，攝影的心意就在她的心中崛起。自然風景與倒影也是現在的她擅長的攝影與題材，而她喜歡大自然，喜歡它最原始純樸的樣貌，喜歡瞬息萬變的氣候帶來的景觀變化，也喜歡它帶來的純粹寧靜的感受。

莫忘初衷是最堅持的信念，不論拍了多久，始終都不曾忘記攝影帶給她的感動和一開始為什麼要拍攝風景的初衷。
`
    return (
      <div>
      <img src={star} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="日月潭四手網船"
        title="莊心瑀"
        location="台灣"
        content={text}

        artistInfo={artistInfo}
        profile={star_profile}
        fb="https://www.facebook.com/estrella.chuang"
        ig="https://www.instagram.com/estrella_chuang/"
        yt=""
        tw=""
        other=""
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1=""
        url2=""
        url3=""
        name = "莊心瑀"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist2;
