import React from 'react';
import SkyArtist from './skyArtist';
import huang_profile from '../../assets/人物照 -黃約農.jpg';
import Slider from '../../modules/img_slider_final'

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

function SkyArtist1() {
  var text =`「這神聖的稜線阿！誰能真正完成大霸尖山至雪山的縱走，戴上勝利的榮冠，訴說首次完成縱走的真與美？」
1927年，日本冒險家沼井鐵太郎成功登頂大霸尖山，在往返的路上對著眼前著迷的景色，在讚嘆之下說出了留到今日仍然為人津津樂道的「聖稜線」由來。聖稜線為臺灣中部雪霸國家公園內的雪山山脈中，從大霸尖山Papak Waqa至雪山B'bu Hagay連峰間高峻的山稜線，是每一位登山者的嚮往之路。
然而在此之前，世居於此的泰雅族人，早就仰望著這片天空千百年了，也在這片土地撒種、生活、孕育文化，這是屬於泰雅族人的傳統領域。隨著這幾百年間不同的殖民政權來到台灣，這條往返泰雅族聖地的山稜線，也早已有許多登山客踏足過、驚嘆它的壯闊。

`
var text2 = `登上台灣泰雅族所生活的高山，看著祖靈分享的這片平和藍天，世界各地的原住民們與大自然的關係是尊敬，是謙卑，是感謝；他們所擁有的全來自於它，而在這一片天空下我們雖渺小卻享有豐盛的人生。`

var artistInfo=`出身台灣台中 Tbulan 部落的泰雅族人，中央警察大學畢業。7 年警察工作經驗，現專職平面影像工作，期許用影像為所關心的人、事及物說著動聽的故事。除此之外，其創作對象也經常以泰雅族傳統領域的高山和古道為伍，期望利用影像敘事，將台灣的山林樣貌與族群文化故事呈現在社會大眾面前，亦透過拿起相機攝影機進入山林的行動，喚起族人對祖先及故道的互動，產生更深層的文化連結與認同。

前身為警察，每天與社會最黑暗的角落相處，和街頭抗議的孩子們和平對峙，這一個正義角色帶給他很多矛盾與生命裡獨特的歷程。現在的他卸下這個角色成為專職的攝影師，他回頭行走他的文化認同，他朝向未來紀錄著剛剛落地的生命喜悅，現在的他轉彎後看見不一樣的社會角度，用相機來累積他感動的故事。

美國知名攝影家Ansel Adams說過一句話：「我們不只是用相機照相，我們帶到攝影中的，是所有我們讀過的書，看過的電影，聽過的音樂及愛過的人」。`
  return (
    <div>
    <img src={huang} style={{width:"100%", height:"auto"}}></img>
    <SkyArtist
      artName="凝視聖稜線"
      title="黃約農"
      location="台灣"
      content={text}
      bold="策展者的話："
      contents2={text2}
      artistInfo={artistInfo}
      profile={huang_profile}
      fb="https://www.facebook.com/hyndumas/"
      ig="https://www.instagram.com/hyn_dumas/?hl=en"
      yt=""
      tw=""
      other="https://www.syaximage.com"
      other1={huang_profile}
      other2={huang_profile}
      other3={huang_profile}
      othername1="DUMAS TEMU"
      othername2="DUMAS TEMU"
      othername3="DUMAS TEMU"
      url1=""
      url2=""
      url3=""
      name = "黃約農"
      ></SkyArtist>
    </div>
  );
}


export default SkyArtist1;
