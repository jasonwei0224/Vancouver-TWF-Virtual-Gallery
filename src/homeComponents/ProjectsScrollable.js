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
// import apple_top from '../assets/apple_top_van.jpg';
// import mirror_top from '../assets/mirror_top_van.jpg';
// import people_and_mask_top from '../assets/people_and_mask_top_van.jpg';

function ProjectScrollable(props) {
//   const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const useMountEffect = (fun) => useEffect(fun, [])

    return (
        <div id="projectsScrollingSection">
          <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>

            <ProjectNameRight  url="" image={diversity_top} name="Mirrors"/>

            <ProjectNameLeft image={behind_top} name="I am different, just like you"/>

            <ProjectNameRight url="" image={together_top} name="Sky"/>
            {/*}<ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
