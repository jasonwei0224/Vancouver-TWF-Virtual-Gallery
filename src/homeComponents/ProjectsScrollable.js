import React from 'react';
import placeHolder from "../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../assets/homepage_placeholder_sm_3.jpg";
import sky_top from '../assets/sky_top_van.jpg'
import different_top from '../assets/different_top_van.jpg';
import otherside_top from '../assets/otherside_top_van.jpg';
import apple_top from '../assets/apple_top_van.jpg';
import mirror_top from '../assets/mirror_top_van.jpg';
import people_and_mask_top from '../assets/people_and_mask_top_van.jpg';


function ProjectScrollable(props) {
    return (
        <div id="projectsScrollingSection">
          <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>
          <ProjectNameRight url="/sky"image={sky_top} name="Sky"/>
          <ProjectNameLeft url="/IAmDifferent"image={different_top} name="I am different, just like you"/>
          <ProjectNameRight url="" image={mirror_top} name="Mirrors"/>

            <ProjectNameRight  url="" image={people_and_mask_top} name=""/>
          <ProjectNameLeft  url="" image={apple_top} name="Paul's Apples"/>
          <ProjectNameRight   url="" image={otherside_top} name="The Other Side of Mask"/>


            {/*}<ProjectNameLeft image={homepage_placeholder_sm_3} name="(UN) Being Chinese"/>*/}
            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
