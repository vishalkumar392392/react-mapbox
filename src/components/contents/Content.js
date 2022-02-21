import React from "react";
import data from '../../data/sample.json';
import './content.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch } from "react-redux";
import {mapActions} from '../../store/slices/map-slice'

const Content = ({zoomHandler}) => {

    const dispatch = useDispatch();

    const response = (
            data.providers.map((doctor,index)=>(
                <div key={index} className="card" onClick={()=>{
                     dispatch(mapActions.updateMap({lat:doctor.providerAddress[0].lat,lon:doctor.providerAddress[0].lon}))
                    // zoomHandler({lat:doctor.providerAddress[0].lat,lon:doctor.providerAddress[0].lon})}}
                } }>
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialty.substring(1,doctor.specialty.length-1)}</p>
                </div>
            ))
    )

    return(
        <Scrollbars className="content">
            {response}
        </Scrollbars>
    )
}

export default Content;