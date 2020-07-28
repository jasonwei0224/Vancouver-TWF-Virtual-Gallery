import React from 'react';
import placeHolder from "../../assets/placeholder.jpg";
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";
import homepage_placeholder_sm_1 from "../../assets/homepage_placeholder_sm_1.jpg";
import homepage_placeholder_sm_2 from "../../assets/homepage_placeholder_sm_2.jpg";
import homepage_placeholder_sm_3 from "../../assets/homepage_placeholder_sm_3.jpg";
import together_ch from '../../assets/together_ch.jpg'
import diversity_ch from '../../assets/diversity_ch.jpg';
import behind_ch from '../../assets/behind_ch.jpg';
// import apple_top_tor from '../../assets/apple_top_van.jpg';
// import mirror_top_tor from '../../assets/mirror_top_van.jpg';
// import people_and_mask_top_tor from '../../assets/people_and_mask_top_van.jpg';
import "../../homeComponents/homeCss/homeMain.css";
import "./homeMain-ch.css"

function ProjectScrollable(props) {
    return (
        <div id="projectsScrollingSection">
          <div className="ScrollableTitle">請點選藝廊主題欣賞精采作品 </div>
            <ProjectNameRight url="" image={diversity_ch} name="Mirrors"/>

          <ProjectNameLeft url="/IAmDifferent-ch"image={behind_ch} name="I am different, just like you"/>
            <ProjectNameRight url="/sky-ch"image={together_ch} name="Sky"/>

            <div id="emptySpace"></div>
        </div>
    )
}

export default ProjectScrollable;
