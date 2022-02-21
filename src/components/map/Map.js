import React, { useEffect, useState } from "react";

import  {
    FullscreenControl,
    GeolocateControl,
    Map,
    Marker,
    NavigationControl,
    Popup,
    ScaleControl
  } from "react-map-gl";
  import LocationOnIcon from '@material-ui/icons/LocationOn';
  import CITIES from "../../data/sample.json";
  import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

function MapComponent({res}) {
    const [popupInfo, setPopupInfo] = useState(null);

    const [initialState,setIntialState] = useState(
      {
        latitude: 38.578433,
        longitude: -121.499908,
        zoom: 12.5,
        bearing: 0,
        pitch: 0,
      }
    );
  
    const handlePopupInfo = (city) => {
      setPopupInfo(city);
    }
  
    return (
      <>
        <Map id="myMapA"
          initialViewState={initialState}
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
            longitude={city.providerAddress[0].lon}
            latitude={city.providerAddress[0].lat}
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
              onClose={() => {
                setPopupInfo(null);
              }}
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