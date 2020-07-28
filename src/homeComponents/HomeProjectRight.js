import React, { Component, useRef, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import homepage_placeholder from "../assets/homepage_placeholder_lg.jpg";
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function HomeProjectRight(props) {
  // const myRef = useRef(null)
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  // const useMountEffect = (fun) => useEffect(fun, [])
  // useMountEffect(() => scrollToRef(props.ref1))
    return (
        <div id="homeProjectRight">
            <Row className="thirdSectionHomeProjectRow no-gutters">
                <Col xs="12"className="homeProjectBlankCol"><img src={props.image} href={props.location} style={{width:'100%', height:"auto"}}></img></Col>
                {/*}<Col xs="4"className="homeProjectTitleCol">{props.title}</Col>*/}
            </Row>
        </div>
    );
}

export default HomeProjectRight;
