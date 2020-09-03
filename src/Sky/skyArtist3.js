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

function SkyArtist3() {
    var text =`The story behind the General Rock in Ludao (Green Island) took place in 1950 and lasted until 1987, for a total of 38 years.  At the New Life Correction Center, Oasis Village, on Green Island, many political prisoners were incarcerated there.

Writer Bo Yang wrote on the Human Right Monument, “In those years, how many mothers, wept at night, for their children, in bonds on this island?”

`
  var text2 = `The predecessors’ footprints and today’s us, we all pursue, miss, and expect the inclusiveness and the understanding of knowing the differences under the same sky.  The role of the photographer uses the tunnel of time to take us to see the past modestly, and also remind us to not forget about the wounds the land has been through.`
  var artistInfo=`He photographs the land and society in Taiwan.
He is a photographer, as well as a filmmaker.  He is also an eagle who wanders and flies low over Taiwanese society.

Born in Taipei in 1954, PAN has worked as a photographer for more than 30 years.  In 1980, he started photographing in Lanyu (Orchid Island).  He quit his own advertising firm, sent his works to Independence Evening Post, and has been their photographer since 1987.  During his work at the Post, he witnessed several important social movements and incidents, such as the 520 Peasant Movement in 1988, Nan-Jung Cheng’s funeral and I-hua Chan’s self-immolation in 1989, the Wild Lily March student movement in 1990, and the reformation of presidential election advocated by Democratic Progressive Party in 1995.  This job trained him to be independent and inspired him in his works.  He then became a rational photojournalist who sympathized with everything that happened on this land.  Whether it concerns human rights, democratic thoughts, or self-identification, it all left much conflict and worry in his mind.

Photographing in the era of White Terror control, there was no freedom.  He said, “The images would be shown with alcohol.  Pouring some alcohol in, everything would be presented.”`
    return (
      <div>
      <img src={peter} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="GENERAL ROCK - GREEN ISLAND"
        title="HSIAO-HSIA PAN"
        location="TAIWAN"
        content={text}
        bold="Message from Curator: "
        contents2={text2}
        artistInfo={artistInfo}
        artwork={peter}
        profile={peter_profile}
        shareURL="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FGeneral-Rock-Green-Island&amp;src=sdkpreparse"
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
        url1="/Gazing-In-Holy-Ridge"
        url2="/Hidden-In-The-Clouds"
        url3="/Infinite-Sky-For-Everett"
        url4="/Pause"
        url5="/Boat-In-The-Sun-Moon-Lake"
        url6="/Visible-Or-Invisible"
        url7="/With-The-Passage-Of-Time"
        textName1="Gazing in Holy Ridge"
        textName2="Hidden in the clouds"
        textName3="Infinite Sky for Everett"
        textName4="Pause"
        textName5="The Boat in the Sun Moon Lake"
        textName6="Visible or Invisible"
        textName7="With the Passage of Time"
        name = "HSIAO-HSIA PAN"
        ></SkyArtist>
      </div>
  );
}


export default SkyArtist3;
