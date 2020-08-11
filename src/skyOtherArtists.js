import React from 'react';
import './skyOtherArtists.css'


function SkyOtherArtists(props) {
  return (
    <div className="SOA-container" style={{marginTop:"30px"}}>
      <div className="row">
        <div className="col-sm-4">
          <a href={props.url1}>
          <img className="SOA-img" src={props.img1} alt="Project"/>
          <p className="SOA-name">{props.name1}</p>
          </a>
        </div>
        <div className="col-sm-4">
          <a href={props.url2}>
          <img className="SOA-img" src={props.img2} alt="Project"/>
          <p className="SOA-name">{props.name2}</p>
          </a>
        </div>
        <div className="col-sm-4">
          <a href={props.url3}>
          <img className="SOA-img" src={props.img3} alt="Project"/>
          <p className="SOA-name">{props.name3}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkyOtherArtists;
