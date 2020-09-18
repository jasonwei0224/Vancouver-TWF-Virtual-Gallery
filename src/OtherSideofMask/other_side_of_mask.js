import React, { Component } from 'react';
import './other_side_of_mask.css';
import image1 from '../assets/image1.jpg';
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import walter from '../assets/Walter.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfoTwoArtist from "../programInfoTwoArtist"
import Second_Title from "../modules/Second_Title"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic from "../modules/MainContents_TwoArtistPic"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import ImageWithDescription from"../modules/MainContent_ImageWithDescription";
import MainContents_Important_With_Border_two_bolder from "../modules/MainContents_Important_with_border_two_bold"
import {OBJModel, MTLModel, GLTFModel, AmbientLight,DirectionLight, JSONModel} from 'react-3d-viewer'
import MaskInfo from './maskInfo'
import other_side_hint from "../assets/otherside_hint.png"
import otherside_red_hint from "../assets/otherside_red_hint.png"
import othersdie_black_hint from '../assets/otherside_black_hint.png'



var text = `It is said that words can be sharper than a knife, and oftentimes we say things that are hurtful without it ever being our intention. The purpose of masks is to protect us from getting sick or prevent the spreading of disease, but sometimes it is our own actions or words that do more harm.

This art piece portrays the irony that on the flip side of every beautiful story and gesture exists its potentially damaging impact. Further, the appearance of the inner side of the mask and its similarity to the media’s images of the SARS-CoV-2 virus reflects that it can be difficult for us to differentiate between what is poisonous and what is beautiful. In these current times, we must examine our past behaviours and reflect on how we can learn from them. It takes courage to understand ourselves and each other, and even more so to own our past mistakes.

“The Other Side of Masks” serves as a reminder that our words and actions, in spite of their beauty, can also hold unintentional danger. And just like the two sides of a mask, we must see both sides in order to grow.
`

class OtherSideOfMask extends Component {
  render() {
    var text2=`A Taiwanese artist who immigrated to Canada during her high school years, but her home stay wouldn’t allow to draw or paint in Canada. She soon returned to Taiwan to pursue those desires. After she graduated from university in Taiwan, she returned to Canada to absorb the essence of this diverse land.

    Art has always been her pride and joy and feeds her spirit. For her, creativity is like asking herself reflective questions and answering them in the process of self-discovery. In recent years, she has been curious about “installation art” and also experiencing the diverse communities in Canada, learning the creative thinking of experts, and accumulating her own creations. Each time she releases a piece, we see “echoes”, “discussions”, “emotions” and “habits” between art and people, exploring and dancing with diversity.`

    var text3 = `A graduate of the Emily Carr University of Art and Design who specializes in animation, loves movies, and is good at storytelling using images; painting is like a bridge that connects his emotions with life, and his artworks are diverse and are full of creativity and life. With the ability to create 2D and 3D animation special effects, Walter Kao is able to create the unexpected. Maybe artists that can draw were born with a spellbook, and are powerful magicians like Walter.
    `
    let audio = new Audio("/coughing.mp3")
    const start = () => {
      console.log("clicked")
      audio.play()
    }

    setTimeout(function() {
        document.getElementById("other_side_hint1").style.display ="none"
        document.getElementById("other_side_hint2").style.display ="none"
    },5000);

    return (
      <div>
        <Container fluid>
            <div style={{borderTop: "1px solid rgb(36, 111, 121)"}}></div>
              <Row >
                <Col id="model3D-col" xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col" >


                    <img id="other_side_hint1" className="otherside_hint" src={otherside_red_hint}></img>
                    <MTLModel src="./MaskModel1.obj" mtl="./MaskModel1.mtl" width="1800" height="800" position={{x:0.5,y:-1.25,z:1}} rotation={{x:-1.3,y:1.20,z:1.5}}>

                      <AmbientLight color={0xffffff}/>
                   <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
                   <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
                    </MTLModel>
           </Col>
           <Col xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col2" >

             <img id="other_side_hint2" className="otherside_hint2" src={otherside_red_hint}></img>
             <MTLModel src="./MaskModel2.obj" mtl="./MaskModel2.mtl" width="1800" height="800" position={{x:0.5,y:-1.25,z:1}} rotation={{x:-1.3,y:1.20,z:1.5}}>
               <AmbientLight color={0xffffff}/>
            <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
            <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>

             </MTLModel>
          </Col>
        </Row>
          <ProgramInfoTwoArtist
            subtitle="Behind the Masks"
            title="THE OTHER SIDE OF MASK"
            artistitle1="Sketch Artist: "
            artistName1="Lady Hao Hao"
            artistitle2="3D Artist: "
            artistName2="Walter Kao / Yani-X"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FOtherSideOfMask&amp;src=sdkpreparse"
            color="#246f79">
          </ProgramInfoTwoArtist>

          <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
            <MainContents_Important_With_Border_two_bolder  style={{color:"#0C3866"}} bold="Desktop: " contents="There are a total of two 3D Models. Click and drag to look at different angles of the 3D models; to see details, scroll to zoom in."
            bold2="Mobile / Tablet: " contents2="There are a total of two 3D Models. Tap and drag your finger left/right to rotate the 3D model. Pinch in and out to zoom. "></MainContents_Important_With_Border_two_bolder>

          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
          </MainContents_Middle_Adonis>
          <Row>
            <Col xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col3" >
              <MTLModel src="./MaskModel2.obj" mtl="./MaskModel2.mtl" width="1800" height="800" position={{x:0.5,y:-1.25,z:1}} rotation={{x:-1.3,y:1.20,z:1.5}}>
                <AmbientLight color={0xffffff}/>
                <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
                <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
              </MTLModel>
           </Col>
          </Row>
          <MaskInfo></MaskInfo>
          <MainContents_TwoArtistPic pic1={ladyhaohao} title1="Lady Hao Hao"contents1={text2} pic2={walter} title2="Walter Kao" contents2={text3}></MainContents_TwoArtistPic>
          <div className="people_padding"></div>

          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.vancouvertaiwanfest.ca%2FOtherSideOfMask&amp;src=sdkpreparse" ></MobileShareButton>
        </Container>

        <Footer content= "&copy; 2020 ASIAN-CANADIAN SPECIAL EVENTS ASSOCIATION"></Footer>
      </div>
    );
  }
}

export default OtherSideOfMask;
