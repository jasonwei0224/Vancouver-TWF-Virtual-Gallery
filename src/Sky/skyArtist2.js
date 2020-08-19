import React from 'react';
import SkyArtist from './skyArtist';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import Slider from '../modules/img_slider_final'


import sara_profile from '../assets/人物照-Sara.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'

import sara1 from '../assets/Sara1.jpg';
import sara2 from '../assets/Sara2.jpg';
import valerie from '../assets/Valerie.jpg';
import star from '../assets/心星.jpg';
import peter from '../assets/潘小俠.jpg';
import p1 from '../assets/阿比1.jpg';
import p2 from '../assets/阿比2.jpg';
import huang from '../assets/黃約農.jpg'

function SkyArtist2() {
    var text =`I like shooting sunrises at Sun Moon Lake.  Every time I shoot here, I feel calm and peaceful.

Four-handed fishing net boats are the houseboats which were built by the Thao people who lived in the Sun Moon Lake area.  These houseboats were the Thao’s main transportation for fishing.  The ecological changes led to a  huge reduction in fishery harvest.  Not many Thao people are doing it anymore.  Those abandoned boats become old and broken.  In order for those visitors who come to Sun Moon Lake to be able to see the four-handed fishing net boat, this boat shown on the picture is for display only.

This four-handed fishing net boat is my favorite spot when taking sunrise pictures at Sun Moon Lake.  Not only because it is the best decor, but it is also the best location to grab those photographers who would like to seek for their inner peace.

The sea of clouds surrounding Sun Moon Lake is a rare scenery to be seen.  Sometimes the lake becomes foggy, so it is not easy to see this huge and thick sea of clouds.  Just like the destiny of four-handed fishing net boats, it is no longer used.  Lives are unpredictable just like this sky.  Everyone should enjoy every moment and value it under this sky.
`

  var artistInfo=`"If I am not on my way to take pictures, then I am shooting at that moment.”

Estrella Chuang is an instructor and also a photographer at Taiwan Canon.  She is passionate about photography as well as travelling.  She is almost addicted to shooting, as if she was born to shoot photos.  She said, “Photography is just like oxygen to me.  It is essential for me.”

Inspired by her father’s photo records with her family, and the stunning picture of the sunset at Mount Hehuan when it was covered by snow, the passion toward photography arose in Estrella’s mind.  Natural scenery and reflections are two themes she is good at.  She loves nature and is fascinated with its simplicity and primitiveness.  She likes the varied scenery as a result of the instant climate change, and appreciates the associated inner peace brought to her.

“Don’t forget the initial intention” is Estrella’s belief.  Regardless of how long she has been a photographer, she will never forget about the enthusiasm it has brought to her and her initial desires of shooting landscapes.`
    return (
      <div>
    <img src={star} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="The Boat in the Sun Moon Lake"
        title="ESTRELLA CHUANG"
        location="TAIWAN"
        content={text}

        artistInfo={artistInfo}
        profile={star_profile}
          artwork={star}
        fb="https://www.facebook.com/estrella.chuang"
        ig="https://www.instagram.com/estrella_chuang/"
        yt=""
        tw=""
        other=""
        fbDisplay="inline-block"
        igDisplay="inline-block"
        twitterDisplay="none"
        ytDisplay="none"
        otherDisplay="none"
        other1={huang_profile}
        other2={huang_profile}
        other3={huang_profile}
        other4={huang_profile}
        other5={huang_profile}
        url1="/Gazing-In-Holy-Ridge"
        url2="/General-Rock-Green-Island"
        url3="/Hidden-In-The-Clouds"
        url4="/Infinite-Sky-For-Evertt"
        url5="/Pause"
        url6="/Visible-Or-Invisible"
        url7="/With-The-Passage-Of-Time"
        textName1="Gazing in Holy Ridge"
        textName2="General Rock Green Island"
        textName3="Hidden in the clouds"
        textName4="Infinite Sky for Evertt"
        textName5="Pause"
        textName6="Visible or Invisible"
        textName7="With the Passage of time"
        name = "ESTRELLA CHUANG"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist2;
