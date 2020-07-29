import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../../assets/placeholder.jpg";
import Slider_home from "../../modules/img_slider_final_home2";
import "../../homeComponents/homeCss/homeMain.css";
import "./homeMain-ch.css"
// import placeHolder from "../../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../../assets/homepage_placeholder_sm_3.jpg";
import together_ch from '../../assets/together_ch.jpg'
import diversity_ch from '../../assets/diversity_ch.jpg';
import behind_ch from '../../assets/behind_ch.jpg';

function HomeTopSection() {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                  <div className="firstColTitle">選自社區朋友提供的天空照片</div>
                    <Slider_home/>
                </Col>
                <Col id="projectsScroll">
                  <div id="projectsScrollingSection">
                    <div className="ScrollableTitle">請點選藝廊主題欣賞精采作品 </div>
                      <ProjectNameRight url="" image={diversity_ch} name="Mirrors"/>

                    <ProjectNameLeft url="/IAmDifferent-ch"image={behind_ch} name="I am different, just like you"/>
                      <ProjectNameRight url="/sky-ch"image={together_ch} name="Sky"/>

                      <div id="emptySpace"></div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;
