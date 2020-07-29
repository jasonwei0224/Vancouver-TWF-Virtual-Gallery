import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../assets/placeholder.jpg";
import Slider_home from "../modules/img_slider_final_home2";
import behind_top from '../assets/behind.jpg'
import diversity_top from '../assets/diversity.jpg';
import together_top from '../assets/together.jpg';
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
function HomeTopSection(props) {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                  <div className="firstColTitle">SELECTED SKY PHOTOS <br></br>FROM PEOPLE LIKE YOU</div>
                    <Slider_home/>
                    {/* <img id='leftImage' src={placeHolder}/> */}
                </Col>
                <Col id="projectsScroll">
                  <div id="projectsScrollingSection">
                    <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>
                      <ProjectNameRight  url="" image={diversity_top} name="Mirrors"/>
                      <ProjectNameRight url="" image={behind_top} name="Sky"/>
                        <ProjectNameLeft image={together_top} name="I am different, just like you"/>
                      {/*}<ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
                      <div id="emptySpace"></div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;
