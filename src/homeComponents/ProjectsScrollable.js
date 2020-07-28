import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import placeHolder from "../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../assets/homepage_placeholder_sm_3.jpg";
import behind_top from '../assets/behind.jpg'
import diversity_top from '../assets/diversity.jpg';
import together_top from '../assets/together.jpg';
import { Row, Col } from 'react-bootstrap';
// import apple_top from '../assets/apple_top_van.jpg';
// import mirror_top from '../assets/mirror_top_van.jpg';
// import people_and_mask_top from '../assets/people_and_mask_top_van.jpg';

function ProjectScrollable(props) {
//   const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const useMountEffect = (fun) => useEffect(fun, [])

    return (
        <div id="projectsScrollingSection">
          <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>

            {/* <ProjectNameRight gotoSection1={props.gotoSection1} image={diversity_top} name="Mirrors"/>
            <ProjectNameLeft gotoSection2={props.gotoSection2} image={behind_top} name="I am different, just like you"/>
            <ProjectNameRight gotoSection3={props.gotoSection3} image={together_top} name="Sky"/> */}
            <Row id="mainRow">
              <Col xl={{span:16, offset:0}} className="projectCols">
                <img  id="projectImage" src={diversity_top} onClick={() => props.gotoSection1()}/>
              </Col>
            </Row>
            <Row id="mainRow">
              <Col xl={{span:12, offset:0}} className="projectCols">
                <img id="projectImage" src={behind_top} onClick={() => props.gotoSection2()}/>
              </Col>
            </Row>
            <Row id="mainRow">
              <Col xl={{span:16, offset:0}} className="projectCols">
                <img  id="projectImage" src={together_top} onClick={() => props.gotoSection3()}/>
              </Col>
            </Row>
            {/*}<ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
