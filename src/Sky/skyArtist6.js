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

    var text =`Connected in the Sky, entangled at the root, for Ever-ett
Artist Poet: Valerie Durant, March 18, 2020

I reach for you in the infinite sky-
from this unsettled earthly vantage.
I dream our connection, I’ve stop asking, why not?
Imagining our touch, a touch illusive in the breath of the gentle wind.
Your leaves, your petals, drift and swirl downward,
as they caress and flutter against our skins, our bark, our trunks,
resting, on the receiving earth beneath.
They cannot disentangle us, we are forever joined,
in the sky, in the clouds, in the stars
and in the invisible connection of love entangled.
Entwined in our common roots, beneath the soil,
hidden in the past, yet known.
We dance as children, on this earth
We fly as birds, in our dreams to the clouds -
You will always be in me and I in you.


`
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
  var artistInfo=`In my creative practice, I explore the invisible systems and connections that exist in
nature and human impact on the natural world.

During my hours of solitude and reflection, I look to the sky and the tree canopy and find
solace in this shared experience. Apart, on distant shores, the sky unites us in the
magnificence of our diversity of colour and light. We shutter to the depths of our
collective core by the two pandemics, that of Covid-19 and the severity of the depths of
systemic racism. Through this, my hope is that we are awoken to the realization that we
are one, as sensing humans, connected in the complexity of the web of life. As humans,
we can share equally and joyfully in the movement of clouds, the soaring of birds and the
delicate flutter of leaves as they fall to the earth, lifted by the breeze. With the continuum
of the returning sun and moon, the cycles of life, we can find unity and peace, amidst the
chaos in the world around.

I dream that we are trees, in a grove of trees, living symbiotically, our branches flex and
flow, our canopy shyly touching as we sway rhythmically, in syncopation. We are
different, each one unique yet sharing commonalities. Blood courses through our veins
and we share the sky above. As trees, we inherently possess the quality of nurture,
empathy, equality and reciprocity. We are reliantly intertwined in our roots, connected to
the earth, yet in our canopy, we are free to imagine and return to the stars.
Can we be more like trees in our relationship with others as we look to the sky for
answers?`
    return (
      <div>
      <img src={valerie} style={{width:"100%", height:"auto"}}></img>
      <SkyArtist
        artName="INFINITE SKY FOR EVERETT"
        title="VALERIE DURANT"
        location="CANADA"
        content={text}
        bold="Soaring Sky: Who are you, who am I?"
        contents2={text2}
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
