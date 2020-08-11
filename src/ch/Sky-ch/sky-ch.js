import React from 'react';
import ImgSlider from '../../../img_slider';
import { Container } from "react-bootstrap";
import ProgramInfoThinLine from '../../programInfoThinLine';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../../modules/MainContents_Important"
import Button1 from "../../modules/Button1";
import Footer from "../footer-ch";
import SkyImageGallery from "../skyImageGallery";
import './sky-ch.css'
import Slider from './img_slider_final_sky'
import ArtistList from './ArtistList';

import sara1 from '../../assets/Sara1.jpg';
import sara2 from '../../assets/Sara2.jpg';
import valerie from '../../assets/Valerie.jpg';
import star from '../../assets/心星.jpg';
import peter from '../../assets/潘小俠.jpg';
import p1 from '../../assets/阿比1.jpg';
import p2 from '../../assets/阿比2.jpg';
import huang from '../../assets/黃約農.jpg'

import sara_profile from '../assets/人物照-Sara.jpg';
import huang_profile from '../assets/人物照 -黃約農.jpg';
import valerie_profile from '../assets/人物照-Valerie.jpg';
import peter_profile from '../assets/人物照-潘小俠.jpg';
import star_profile from '../assets/人物照-心星.jpg';
import p1_profile from '../assets/人物照-伊顯玲.jpg'

function Sky() {

  const goToForm=()=> {
    window.location='Sky';
  };

  var images = [sara1, sara2, valerie, star, peter, p1, p2, huang]
var text=`What is something that you can see when you look up, no matter wherever you are in the world? The sky is one constant no matter where you are and what time of day, it is there above the horizon.

Working with photographers in Canada and Taiwan, Vancouver TAIWANfest presents Eight massive lanterns at šxʷƛ̓ənəq Xwtl'e7énḵ Square (formally known as Vancouver Art Gallery North Plaza) in downtown Vancouver. These images show that despite our geographical differences, we all look towards that same sky that looms over our heads, further reaffirming that we are all in this together. Sky is built on the concept of removing the influence of colour; by looking past our differences, we can see that we are one and the same.

In all that the world has gone through, the unchanging sky gives people a sense of hope and anticipation for the feeling of a normal day to come again. Furthermore, Indigenous teachings and stories about the sky can guide us in these times. By giving each image a background story, we can implore others to look to the sky and gain strength.

Your experience and view of the sky will be different depending on the time of day. These lanterns will create a whole new dynamic look and feel through the use of LED lights in the evenings.

As the province is working to reopen the economy in a safe manner and more and more people are getting back to a new normal, please follow all public health guidelines to protect yourself and others from COVID-19. Individuals should monitor their health for signs and symptoms of COVID-19. And if you’re not feeling well, they recommend staying home at this time. Respect social-distancing measures when outdoors and visiting the exhibit. Wear a face covering to protect yourself and others, especially when social-distancing is not possible such as on transit. By visiting the on-site “Sky” activation, you acknowledge that there are inherent risks associated with the COVID-19 Pandemic and will not hold ACSEA or our programming partners liable for your health.
`
  return (
    <div>
      <Container fluid style={{padding:"0"}}>
     <Slider images={images}/>

        <ProgramInfoThinLine
          subtitle="I'm different, just like you!"
          title="SKY"
          artistName="Curator: Jessica Sung"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"
          color="#246f79"
          ></ProgramInfoThinLine>

        <SkyImageGallery link1="/SkyArtist1" link2="/SkyArtist2" country="Canadian Artists" artist1="Sara Boychuk" artist2="Valerie Durant" image1={sara_profile} image2={valerie_profile}></SkyImageGallery>
        <SkyImageGallery link1="/SkyArtist3" link2="/SkyArtist4" country="Taiwanese Artists"artist1="Hsiao-Hsia Pan" artist2="Dumas Temu" image1={peter_profile} image2={huang_profile}></SkyImageGallery>
        <SkyImageGallery link1="/SkyArtist5" link2="/SkyArtist6" country="Taiwanese Artists"artist1="Hsien-ling Yin" artist2="Estrella Chuang" image1={p1_profile} image2={star_profile}></SkyImageGallery>

        <ArtistList></ArtistList>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}></MainContents_Middle_Adonis>
        <Second_Title secondTitle="UNDER THE SAME SKY PROJECT" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important contents="This province's condo insurance market is unhealthy and has saddled owners with sudden increases of an estimated 50 percent in Metro Vancouver, according to a three-month investigation by the B.C. Financial Services Authority."></MainContents_Important>
        <div className="sky_space"></div>
        <Button1 onclick={goToForm} title="UPLOAD YOUR PHOTO" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default Sky;
