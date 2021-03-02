import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshake,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';



 const Teams = (props) => {
       
     const addPlayers =props.btn

    const littleStyle={
            width: "18rem"
           }
     const img={
         width:'100px',
         height:'100px',
         margin:'auto',
         paddingTop:'5px'
     }
 
  const {country,height,image,name,position,team} = props.players
    return (
            <div class="card  m-2" style={littleStyle}>
            <img src={image} style={img} class="card-img-top"/>
            <div class="card-body" >
            <h5>{name}</h5>
            <p class="card-text">Team: {team}</p>
            <p class="card-text">Country: {country}</p>
            <p class="card-text">Position:{position}</p>
            <p class="card-text">Height:{height}</p>
            <a onClick={(players) => addPlayers(props.players)} class="btn btn-info"><FontAwesomeIcon icon={faCheckCircle}/> Get Hierd</a>
            </div> 
            </div>
     )
           
}
export default Teams


