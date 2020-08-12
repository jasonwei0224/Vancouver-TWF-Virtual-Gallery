import React from 'react';
import './skyOtherArtists.css'
import HoverImage from "react-hover-image"

function SkyOtherArtists(props) {
  return (

    <div className="SOA-container" style={{marginTop:"30px"}}>
      <div className="row">
        <div className="col-sm-2">
          <a href={props.url1}>
          <HoverImage className="SOA-img" hoverSrc={props.name1} src={props.img1}/>
          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url2}>
            <HoverImage className="SOA-img" hoverSrc={props.name2} src={props.img2}/>

          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
            <HoverImage className="SOA-img" hoverSrc={props.name3} src={props.img3}/>

          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
           <HoverImage className="SOA-img" hoverSrc={props.name4} src={props.img4}/>
          </a>
        </div>
        <div className="col-sm-2">
          <a href={props.url3}>
            <HoverImage className="SOA-img" hoverSrc={props.name5} src={props.img5}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkyOtherArtists;
