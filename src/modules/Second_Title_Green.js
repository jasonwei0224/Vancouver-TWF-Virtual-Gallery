import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import "./Second_Title.css"

const Second_Title_Red = (props) => {
    return (
        <div>
            <Row >
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <p className ="Second_Title_Green">{props.secondTitle}</p>
                </Col>
            </Row>

        </div>
    );
}

export default Second_Title_Red;
