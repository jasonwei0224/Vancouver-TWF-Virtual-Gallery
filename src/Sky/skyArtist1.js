import React from 'react';
import SkyArtist from './skyArtist';

import huang_profile from '../assets/人物照 -黃約農.jpg';
import Slider from '../modules/img_slider_final'

import sara_profile from '../assets/人物照-Sara.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg';

import huang_name from '../assets/黃約農EN.jpg';
import sara_name from '../assets/SaraEN.jpg';
import valerie_name from '../assets/ValerieEN.jpg';
import peter_name from '../assets/潘小俠EN.jpg';
import star_name from '../assets/心星EN.jpg';
import p1_name from '../assets/伊顯玲EN.jpg'

import sara1 from '../assets/Sara1.jpg';
import sara2 from '../assets/Sara2.jpg';
import valerie from '../assets/Valerie.jpg';
import star from '../assets/心星.jpg';
import peter from '../assets/潘小俠.jpg';
import p1 from '../assets/阿比1.jpg';
import p2 from '../assets/阿比2.jpg';
import huang from '../assets/黃約農.jpg'



function SkyArtist1() {
  var text =`“What a holy ridgeline! Who can really complete the whole trail from Dabajian Mountain to Xue Mountain, wear the crown of victory, and tell us the true beauty after one’s completion?”

In 1927, Tetsutaro Numai, a Japanese adventurer, conquered the Dabajian Mountain and reached its peak.  On his way back, he was amazed by the landscape, and therefore left the comments described above, which is also widely passed on as the origin of the Holy Ridgeline.  Holy Ridgeline is located in Shei-Pa National Park, in Central Taiwan.  It connects Papak Waqa from Dabajian Mountain to B’bu Hagay in Xue Mountain.  It is a trail that every climber seeks to visit.

However, way before it was discovered, the Atayal people who live here have already seen this astonishing landscape for thousands of years.  They also farm here, live here, and build up their own culture here.  This is Atayal’s sacred area.  Under the control of various colonial regimes in Taiwan for the past centuries, this trail linked to the Atayal’s sacred place has been visited by many climbers, and fascinates every one of them.

`
var text2 = `Climbing the mountain where Atayal people live, seeing the blue peaceful sky the ancestors used to see.  The relationship between Indegenious people from all around the world and nature is mutually respected, humbled, and appreciated.  Everything comes from this mountain.  We may look small under this sky, but our life is abundant.
`
var artistInfo=`An Atayal from Tbulan Tribe in Taichung, Taiwan, Dumas Temu graduated from Central Police University.  He has 7 years experience as a police officer, and he now works in the graphic imaging field.  He wants to use images to tell great stories in regards to the people and things he cares about.  In addition, his images focus on the mountains and trails in the Atayal sacred area because he wants to tell stories through these images.  He brings out Taiwan’s mountain landscape and the Atayal culture to the public.  Also, through taking his camera and video camera into the mountains, it reminds his people about the interaction with their ancestors and the old trails.  The cultural bond and identity becomes profound.

Dumas Temu used to be a police officer who saw the darkest side of society everyday, and confronted kids peacefully striking on the street.  This was a role of justice that gave him much conflict but also brought him very unique experiences, and he has now changed his career to a professional photographer.  He follows what he believes his culture is.  He walks to the future and records the joy of a newborn baby.  He now sees different sides of society, and accumulates his stories through his camera.

Ansel Adams, a well-known American photographer, said, “You don't make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved.”`
  return (
    <div>
    <img src={huang} style={{width:"100%", height:"auto"}}></img>
    <SkyArtist
      artName="Gazing in Holy Ridge"
      title="DUMAS TEMU / YUEH-NUNG HUANG"
      location="TAIWAN"
      content={text}
      bold="Message from Curator: "
      contents2={text2}
      artistInfo={artistInfo}
      artwork={huang}
      profile={huang_profile}
      fb="https://www.facebook.com/hyndumas/"
      ig="https://www.instagram.com/hyn_dumas/?hl=en"
      yt=""
      tw=""
      other="https://www.syaximage.com"
      fbDisplay="inline-block"
      igDisplay="inline-block"
      twitterDisplay="none"
      ytDisplay="none"
      otherDisplay="inline-block"
      other1={sara_profile}
      other2={valerie_profile}
      other3={peter_profile}
      other4={star_profile}
      other5={p1_profile}
      othername1={sara_name}
      othername2={valerie_name}
      othername3={peter_name}
      othername4={star_name}
      othername5={p1_name}
      url1="/General-Rock-Green-Island"
      url2="/Hidden-In-The-Clouds"
      url3="/Infinite-Sky-For-Everett"
      url4="/Pause"
      url5="/Boat-In-The-Sun-Moon-Lake"
      url6="/Visible-Or-Invisible"
      url7="/With-The-Passage-Of-Time"
      textName1="General Rock Green Island"
      textName2="Hidden in the clouds"
      textName3="Infinite Sky for Everett"
      textName4="Pause"
      textName5="The Boat in the Sun Moon Lake"
      textName6="Visible or Invisible"
      textName7="With the Passage of time"
      name = "DUMAS TEMU / YUEH-NUNG HUANG "
      ></SkyArtist>
    </div>
  );
}


export default SkyArtist1;
