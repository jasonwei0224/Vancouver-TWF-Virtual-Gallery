import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_Middle_Adonis_Notice = (props) => {
    return (
        <div>
            <Row className="mainSection_Row_adonis_Notice">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
                    <p style={{color:props.color, fontWeight: props.fontWeight, fontFamily: props.font, fontSize:props.size}}>{props.contents}
                      <span style={{color:props.color, fontWeight: 'normal', fontFamily: props.font}} className="notice_small">{props.contents2}        </span>
                                <br/>
                    </p>

                </Col>
            </Row>
        </div>
    );
}

export default MainContents_Middle_Adonis_Notice;
