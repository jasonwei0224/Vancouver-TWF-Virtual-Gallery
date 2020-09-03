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
    var text =`綠島將軍岩的故事，發生在1950年至1987年間，當時正值解嚴之前，在綠島新生訓導處－綠洲山莊，關了無數的政治犯，期間長達38年。

作家柏楊在綠島的人權紀念碑上寫著：「在那個時代，有多少母親，為她們囚禁在這個島上的孩子，長夜哭泣。」

`
  var text2 = `前人的足跡與現在的我們，在同一片天下追求的，掛念的，期待的，都是那份包容，與了解更多的不同；攝影師這個角色透過時光的隧道，讓我們可以更謙卑的看見過去，也警惕世人，別忘了土地上曾有的痛。`
  var artistInfo=`他為台灣土地而紀錄，為台灣社會而紀實。
他是攝影師，電影人，亦是台灣社會裡遊蕩且低空飛行的老鷹。

1954年生於台北市，從事紀實攝影工作30餘年。1980年從蘭嶼開始紀實，他從廣告公司老闆轉行，毛遂自薦送了作品給自立晚報，在1987年進入自立早晚報擔任攝影記者多年。在報社採訪工作中，目擊社會重大運動與事件，例如 1988年520農民運動、1989年519鄭南榕出殯-詹益樺自焚事件、1990年三月野百合學運、1995年民進黨推動總統直選運動，這份「工作」讓他獨立並充分得到許多創作的養分，成為一名理性的攝影記者，感性台灣土地上所發生的每一件事，從人權上，從民主思想上，從自我的身份認同上，都在他的心中有著許許多多的衝突與不安。

在蒼白的年代、不自由的空氣中紀實，他說：「影像是用酒顯影的，酒倒下去，照片就出來了。」`
return(
      <div>
      <img src={peter} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="綠島將軍岩"
        title="潘小俠"
        location="台灣"
        content={text}
        shareURL="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FGeneral-Rock-Green-Island-ch&amp;src=sdkpreparse"
        bold="策展者的話："
        contents2={text2}
        artwork={peter}
        artistInfo={artistInfo}
        profile={peter_profile}
        fb="https://www.facebook.com/profile.php?id=100010750592578"
        ig=""
        yt=""
        tw=""
        other=""
        fbDisplay="inline-block"
        igDisplay="none"
        twitterDisplay="none"
        ytDisplay="none"
        otherDisplay="none"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1="/Gazing-In-Holy-Ridge-ch"
        url2="/Hidden-In-The-Clouds-ch"
        url3="/Infinite-Sky-For-Everett-ch"
        url4="/Pause-ch"
        url5="/Boat-In-The-Sun-Moon-Lake-ch"
        url6="/Visible-Or-Invisible-ch"
        url7="/With-The-Passage-Of-Time-ch"
        textName1="凝視聖稜線"
        textName2="撥雲見日"
        textName3="無垠的天空"
        textName4="雲止時刻"
        textName5="日月潭四手網船"
        textName6="可見與不可見的"
        textName7="時間的流逝"
        name = "潘小俠"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
