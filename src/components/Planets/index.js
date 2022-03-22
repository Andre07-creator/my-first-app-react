import React, { Fragment, useEffect, useState } from "react";
import Planet from "./Planet/Index";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

/*componentDidMount() {
  getPlanets().then((data) => {
    this.setState((state) => ({
      planets: data["planets"],
    }));
  });
}*/

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  },[]);

  const removeLast = () => {
    let newPlanets = [...planets];
    newPlanets.pop();
    setPlanets(newPlanets);
  };

  return (
    <Fragment>
      <h3>Planet list</h3>
      <button onClick={removeLast}>Remove Last</button>
      {planets.map((planet, index) => (
        <Planet
          name={planet.name}
          desc={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          id={planet.id}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
