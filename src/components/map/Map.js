import React, { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

import  {
    FullscreenControl,
    GeolocateControl,
    Map,
    Marker,
    NavigationControl,
    Popup,
    ScaleControl,
    useMap,
  } from "react-map-gl";
  import LocationOnIcon from '@material-ui/icons/LocationOn';
  import CITIES from "../../data/sample.json";
  import { IconButton } from "@material-ui/core";

function MapComponent() {
    const [popupInfo, setPopupInfo] = useState(null);

    const { myMapA } = useMap();

    const flyTo = (doctor) => {
      myMapA.flyTo({
        center: [Number(doctor.providerAddress[0].lon.toFixed(10)),
         doctor.providerAddress[0].lat.toFixed(10)],
        zoom:15
      });
    };

    const afterClosePopup = () => {
      setPopupInfo(null)
      myMapA.flyTo({
        center: [-121.499908,38.578433],
        zoom:12.5
      });
    }
  
    const handlePopupInfo = (city) => {
      setPopupInfo(city);
      flyTo(city);
    }
  
    return (
      <>
        <Map id="myMapA"
          initialViewState={{
            latitude: 38.578433,
            longitude: -121.499908,
            zoom: 12.5,
            bearing: 0,
            pitch: 0,
          }}
          mapboxAccessToken="pk.eyJ1IjoidmlzaGFsa3VtYXIzOTIiLCJhIjoiY2t6czlibHZ1NDlxcTJ5bnJqdnBua2tlZiJ9.udJvqdKsdqEMt7dNcWdnvQ"
          mapStyle="mapbox://styles/vishalkumar392/ckzs9ooyu009o15npb90uf13m"
          // mapStyle="mapbox://styles/mapbox/dark-v9"
          style={{ width: "100vw", height: "100vh" }}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
  
          {CITIES.providers.map((city, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={Number(city.providerAddress[0].lon.toFixed(10))}
            latitude={Number(city.providerAddress[0].lat.toFixed(10))}
            anchor="bottom"
          >
              <IconButton onClick={()=>{
              handlePopupInfo(city)
            }}
            >
              <LocationOnIcon style={{color:"red",width:"32px",height:"32px"}} />
              </IconButton>
          </Marker>
        ))}
  
        {popupInfo ? (
            <Popup
              latitude={popupInfo.providerAddress[0].lat}
              longitude={popupInfo.providerAddress[0].lon}
              closeOnClick={false}
              onClose={() => afterClosePopup()}
            >
              <div>
                <h2>{popupInfo.providerAddress[0].addline1}</h2>
              </div>
            </Popup>
          ) : null}
  
        </Map>
      </>
    );
}

export default MapComponent;