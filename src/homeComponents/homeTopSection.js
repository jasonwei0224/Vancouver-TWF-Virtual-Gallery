import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../assets/placeholder.jpg";
import Slider_home from "../modules/img_slider_final_home2";
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
                    <ProjectScrollable gotoSection1={props.gotoSection1} gotoSection2={props.gotoSection2} gotoSection3={props.gotoSection3}/>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;
