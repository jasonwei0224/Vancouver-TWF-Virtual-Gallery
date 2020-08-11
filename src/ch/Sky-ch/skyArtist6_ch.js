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

    var text =`我在無垠的天空中向你靠近，
從動盪不安大地的視角，
我夢想著我們之間可有可無的關係，但是我已經不再詢問，為什麼沒有呢？
想像著我們之間的觸碰，像是在輕柔的微風中呼吸般的虛幻
你的葉子、你的花瓣，螺旋地向下旋轉飄落
像極了顫動地親吻了我們每一寸肌膚、每一片樹皮、每一段樹幹，
落腳在下方土地上沉寂
他們無法將我們鬆開，我們被永恆地綁在
天空上、雲朵間、繁星中
以及隱形的糾纏住的愛裡。
在土壤下我們交錯的根
藏匿於過去之中，尚未被發掘
我們像孩子般的舞蹈在這地球上
如同鳥兒般向著夢想雲朵飛翔
你將永遠在我心中，而我也同住你心`
  var text2 = `
  Artist Poet: Valerie Durant, 2020

  Cossack Kazakh Russian Jew
  Sami Druze Georgian Sioux
  Green Eyed Nogai Croat too
  X2 Me2, a HUMAN slew
  if we dig, to our surprise
  that in the sky, I share your eyes.
  We are different, yet blood and bone
  brown white yellow,
  please,
  let’s stop throwing stones.
  The truth revealed,
  for all laid bare
  and in the dawn,
  for you, I dare.`
  var artistInfo=`我運用自己的想像，找尋存在於大自然中，以及人類對於自然環境的影響之間，那肉眼看不見的系統與連結。

在我獨自反思之時，我總能在大樹上那茂密的枝枒中，所露出的天空一隅，尋得慰藉。不論分隔多遠，天空總能不分種族及顏色地，將你我集結在一起。Covid-19 (新冠肺炎)以及嚴重的種族歧視，將我們身為人類的核心價值拒之門外。經由這次的事件，我期望人們能被喚醒，我們是一樣的，都是生活於這個錯綜複雜的人際關係底下，有感覺的動物。身而為人，我們可以平等快樂地分享，看著鳥兒翱翔於雲朵間，以及樹葉隨風輕輕地親吻大地。日升月落，生命不斷地循環著，我們還是能在這全世界的混沌紛擾中，找到和諧平靜。

我夢想著我們都是大樹，在同一樹叢中相互共生，一同伸展枝枒，隨著切分音符的旋律，害羞地接近彼此。我們都不同，看似獨特，卻也都相同。血液串流於血管之中，我們也有著同一片天空。像樹一樣，我們有著與生俱來培育、憐憫、平等以及互惠的特性。我們就像纏繞著的根，與大地連結在一起，但我們的枝枒，卻能夠自由地想像，觸及星空。

當我們望向天空尋找答案時，是否也能學習像樹一樣，相互扮演著彼此關係中的角色呢?`
    return (
      <div>
        <img src={valerie} style={{width:"100%", height:"auto"}}></img>

      <SkyArtist
        artName="無垠的天空"
        title="VALERIE DURANT"
        location="加拿大"
        content={text}
        artistInfo={artistInfo}
        profile={valerie_profile}
        fb="https://www.facebook.com/hyndumas/"
        ig="https://www.instagram.com/hyn_dumas/?hl=en"
        yt=""
        tw=""
        other="www.valeriedurant.ca"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        othername1="DUMAS TEMU"
        othername2="DUMAS TEMU"
        othername3="DUMAS TEMU"
        url1=""
        url2=""
        url3=""
        name = "VALERIE DURANT"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
