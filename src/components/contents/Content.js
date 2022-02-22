import React, { useEffect } from "react";
import data from "../../data/sample.json";
import "./content.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMap } from "react-map-gl";

const Content = ({ zoomHandler }) => {

  const { myMapA } = useMap();

  useEffect(() => {
    if (!myMapA) {
      return undefined;
    }
  });

  const flyTo = (doctor) => {
    myMapA.flyTo({
      center: [Number(doctor.providerAddress[0].lon.toFixed(10)),
       doctor.providerAddress[0].lat.toFixed(10)],
      zoom:15
    });
  };

  const response = data.providers.map((doctor, index) => (
    <div
      key={index}
      className="card"
      onClick={() => {
        flyTo(doctor);
        // dispatch(mapActions.updateMap({lat:doctor.providerAddress[0].lat,lon:doctor.providerAddress[0].lon}))
        // zoomHandler({lat:doctor.providerAddress[0].lat,lon:doctor.providerAddress[0].lon})}}
      }}
    >
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty.substring(1, doctor.specialty.length - 1)}</p>
    </div>
  ));

  return <Scrollbars className="content">{response}</Scrollbars>;
};

export default Content;
