import React from 'react';

function HomeColoredHeaderMobile(props) {
    return (
        <div id="home_colored_header">
            <div id="home_colored_header_title" style={{fontWeight:"bold !important"}}>
                {props.title}
            </div>
            <div id="home_colored_header_line">
            </div>
        </div>

    )
}

export default HomeColoredHeaderMobile;
