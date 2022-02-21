
import React, { useState } from "react";
import MapComponent from "./components/map/Map";
import Content from "./components/contents/Content";
import './index.css'

function App() {

  const [res, setResponse] = useState(null);
  const zoomHandler = (data) => {
    setResponse(res);
  }

  return (
    <div>
      <div className="model">
        <Content zoomHandler={zoomHandler}/>
        <MapComponent res={res}/>
      </div>
    </div>
  )
}

export default App;
