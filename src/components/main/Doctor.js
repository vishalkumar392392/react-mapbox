import React, { useState } from 'react'
import './Doctor.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import MapComponent from "../map/Map";
import Content from "../contents/Content";
import '../../index.css'
import { MapProvider } from "react-map-gl";
import { Modal } from '@material-ui/core';

function Doctor(props) {

    const [open, setOpen] = useState(false);

    const body = (
        <div className="model">
            <MapProvider>
                <Content/>
                <MapComponent/>
            </MapProvider>
          </div>
      );

    return (
        <div className='doctor'>
            <h1>Doctors and Hospitals</h1>
            <div className='doctor-card'>
                <h3>Yours Doctors and Hospitals</h3>
                <p className='paragraph' style={{padding:'10px',marginLeft:'-10px'}}>You can see if your doctors and hospitals are in this plan network. You can add or remove doctors in preferences above in the Group information.</p>
                <div>
                    <ul>
                        <li className='icon'>
                        <CheckCircleIcon style={{color:'green'}} />
                        </li>
                        <li>
                            <h3>Dr. Jhon Doe</h3>
                            <p className='paragraph'>General Practice</p>
                        </li>
                        <li >
                            <p>1234 Beautiful Way</p>
                            <p>Sacramento, CA 95678</p>
                        </li>
                        <li>
                        <CheckCircleIcon  style={{color:'green'}} />
                        </li>
                        <li>
                            <h3>Kaiser Foundation Hospital and Rehab Center - Vallejo</h3>
                            <p className='paragraph'>General Acute Care Hospital</p>
                        </li>
                        <li>
                            <p>6805 Five Star Blvd</p>
                            <p>Rocklin, CA 95677</p>
                        </li>
                        <li>
                        <CancelIcon  style={{color:'red'}} />
                        </li>
                        <li>
                            <h3>Dr. Jonathon Doe</h3>
                            <p className='paragraph'>Psychiatry and Neurology - Psychiatry <br/> Psychiatry and Neurology - Child and Adolescent Psychiatry</p>
                        </li>
                        <li>
                            <p>1234 Beautiful Way</p>
                            <p>Sacramento, CA 95678</p>
                        </li>
                    </ul>

                    <div className='footer'>
                        <h3>Doctors in Area</h3>
                        <p className='para'>Within a <span>
                        {/* <label for="cars">Choose a car:</label> */}

                                    <select name="cars" id="cars" className='dropdown'>
                                    <option value="10mile">10 mile</option>
                                    <option value="20mile">20 mile</option>
                                    <option value="30mile">30 mile</option>
                                    
                                    </select>
                            </span> 
                         radius of 95678, there are 474 Doctors in this plan.</p>
                        <a href='#' onClick={()=>setOpen(true)}> View Map </a> | 
                        <a href='#'> Provider Directory</a>
                    </div>

                    {/* <Modal
                        open={open}
                        onClose={()=>setOpen(false)}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal> */}

                </div>
            </div>
        </div>
    )
    
}

export default Doctor;

