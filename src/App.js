
import React, { useState } from "react";
import MapComponent from "./components/map/Map";
import Content from "./components/contents/Content";
import './index.css'
import { MapProvider } from "react-map-gl";

function App() {

  const [res, setResponse] = useState(null);
  const zoomHandler = (data) => {
    setResponse(res);
  }

  return (
    <div>
      <div className="model">
        <MapProvider>
        <Content zoomHandler={zoomHandler}/>
        <MapComponent res={res}/>
        </MapProvider>
      </div>
    </div>
  )
}

export default App;
