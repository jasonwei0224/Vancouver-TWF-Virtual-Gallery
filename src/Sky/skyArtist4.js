import React from 'react';
import SkyArtist from './skyArtist';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import Slider from './img_slider_final_sky'

import sara_profile from '../assets/人物照-Sara.jpg';

import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'
import p1 from '../assets/阿比1.jpg';
import p2 from '../assets/阿比2.jpg';

function SkyArtist3() {

    var text =`When close to the mountains, much undiscovered fun will appear,
When walking into the mountains, much unknown knowledge will be found,
Study hard and return to the mountain,
Acknowledge that there is more to learn,
Realize that there is not only me in this mountain,
Find that actually I may never be IN the mountain.

The me in the mountain, the me outside the clouds, just like the door which keeps opening or closing,
I travel back and forth through history, within the set thinking, from the narrow viewpoint, and inside the utopian world,
This mountain and that cloud tell me to keep humble and continue learning.`


var artistInfo=`Abby hiked in Nepal several years ago.  She heard many stories.  She then thought that the island where she was born must have had many great stories, and so she began her hiking journey.

When walking in the mountains, everything becomes so simple and intuitional.  Your senses become delicate, allowing you to listen to your own breath as well as the land’s.  You also will focus on every step you take, and feel the gentle breeze blowing, the land’s self recovery from the damages, and the forests moistened by rain.  The scenery of different seasons is so distinct, so that we can tell the differences in each area through its historical cultures and natural ecology.  Through profound understanding and personal experiences, I could know how to better cherish this land, and hope I can use what I am good at to convey the nutrients and growth that the mountains bring me.

I will continue to use images, writings, and drawing to record life,  design and mountains.  I hope that this passion burns long.`

var images = [p1, p2]
    return (
      <div>
        <img src={p2} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="VISIBLE OR INVISIBLE"
        title="HSIEN-LING YIN"
        location="TAIWAN"
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
        url1="/Gazing-In-Holy-Ridge"
        url2="/General-Rock-Green-Island"
        url3="/Hidden-In-The-Clouds"
        url4="/Infinite-Sky-For-Everett"
        url5="/Pause"
        url6="/Boat-In-The-Sun-Moon-Lake"
        url7="/With-The-Passage-Of-Time"
        textName1="Gazing in Holy Ridge"
        textName2="General Rock - Green Island"
        textName3="Hidden in the clouds"
        textName4="Infinite Sky for Everett"
        textName5="Pause"
        textName6="The Boat in the Sun Moon Lake"
        textName7="With the Passage of Time"
        name = "HSIEN-LING YIN"
        img={p1}
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
