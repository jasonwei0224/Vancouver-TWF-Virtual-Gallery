import React from 'react';
import SkyArtist from './skyArtist-ch';
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


function SkyArtist3() {

    var text =`靠近山，發現很多未知的有趣，
走進山，發現更多不懂的知識，
努力學習再走進山，
發現又有更多要學習的，
發現不只有自己在山裡，
發現自己竟從未走進山。

山中的自己，雲外的自己，行走之間像一扇門開啟、關起又開啟，
我穿梭在歷史的時間裡，框架的思維裡，單一的視角裡，大同的世界裡，
這一片山和那一片雲告訴我，繼續謙卑繼續學習。
`
var artistInfo=`多年前去尼泊爾健行，發現有好多故事，當下覺得自己生長的島嶼一定也有很多很棒的故事，於是開始學習如何走進山。

走在山裡時，會覺得一切都變得很簡單很直覺，感官總會變得特別敏感細膩，可以仔細聆聽自己與大地的呼吸、專注腳下的每一步，感受到這座島嶼的風是如何吹拂、土地是如何受損與療癒、雨是如何滋潤著山林，而春夏秋冬的景致亦是如此鮮明，也越能感受到不同地區的歷史文化與自然生態，有更深刻的理解與親身經歷後，更能知道該如何珍惜這片土地，希望能用自己的專長，去傳遞山所帶給我的養分與成長。

持續用影像、文字、畫筆，記錄生活、設計跟山之間，期望能永遠保持熱情。`

var images = [p1, p2]

    return (
      <div>
      <img src={p2} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="可見與不可見的"
        title="尹顯玲"
        location="台灣"
        content={text}
        artistInfo={artistInfo}
        artwork={p2}
        profile={p1_profile}
        fb=""
        ig="https://www.instagram.com/oh.alphaever/"
        yt=""
        tw=""
        other="https://abbymoment.blogspot.com/"
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
        url5="/Pause-ch"
        url6="/Boat-In-The-Sun-Moon-Lake-ch"
        url7="/With-The-Passage-Of-Time-ch"
        textName1="凝視聖稜線"
        textName2="綠島將軍岩"
        textName3="撥雲見日"
        textName4="無垠的天空"
        textName5="雲止時刻"
        textName6="日月潭四手網船"
        textName7="時間的流逝"
        name = "尹顯玲"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
