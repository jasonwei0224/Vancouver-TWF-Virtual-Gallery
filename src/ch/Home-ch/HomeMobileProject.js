import React from 'react';
import homepage_placeholder from "../../assets/placeholder.jpg";
import "../../homeComponents/homeCss/homeMain.css";
import "./homeMain-ch.css"
import HoverImage from "react-hover-image"
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function HomeMobileProject(props) {
    return (
        <a href={props.url}><div id="homeMobileProjectRight">
            {/* <Row className="homeMobileProject no-gutters">
                <Col xs="8"className="homeProjectBlankCol"></Col>
                <Col xs="4"className="homeProjectTitleCol">{props.title}</Col>
            </Row> */}
            <div>
                <HoverImage style={{width:'100%', height:"auto"}} id="homeMobileProjectImg" src={props.image} hoverSrc={props.hover}/>
            </div>
            <div id="homeMobileProjectBottomSection">
                <div id="homeMobileProjectType">{props.type}</div>
                <hr id="homeMobileProjectLine"/>
                <div id="homeMobileProjectTitle">{props.title}</div>
                  <div id="homeMobileProjectNotice" style={{whiteSpace: 'pre-line'}}>{props.info}
                    <span style={{fontSize:"35px"}}>{props.info2}</span>
                    </div>
            </div>

        </div></a>
    );
}

export default HomeMobileProject;
