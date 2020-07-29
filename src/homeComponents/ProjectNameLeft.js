import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ProjectNameRight(props) {
    return (
        <div id="projectInScroll">
            <Row id="mainRow2">
                <Col xl={{span:12, offset:0}} className="projectCols">
                    <a href={props.url}><img id="projectImage" src={props.image}/></a>
                </Col>
            </Row>
            <div id="home_colored_header_line_white"></div>

        </div>
    )
}

export default ProjectNameRight;
