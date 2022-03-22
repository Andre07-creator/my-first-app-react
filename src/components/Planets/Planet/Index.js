import React, { Component, useEffect, useState } from "react";
import GrayImg from "../../Shared/grayImg/Index";
import DescLink from "../../Shared/DescripitionWithLink/Index";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

/*componentDidMount() {
    getSattelites(this.props.id).then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });*/

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data['satellites'])
    });
  });
  return (
    <div>
      <h4>{props.name}</h4>
      <DescLink link={props.link} desc={props.desc} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satelites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planet;
