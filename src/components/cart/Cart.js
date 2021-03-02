import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faUsers,faMinusSquare,faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
  
          const myChoicePlayers= props.selectPlayers
         
          const {image,income, team}= myChoicePlayers
          let total=0
         
          const totalYearlySalary= myChoicePlayers.reduce((total,selectMan) => total + selectMan.income,0)

          
    return (
     
        <div>
            <div class='Jumbotron'>
                <h1 class='text-danger text-uppercase mt-2'> checkout!!</h1>
                <h2 class='text-danger  text-white text-uppercase mt-2'><FontAwesomeIcon icon={faHeart}/> My Favourate <FontAwesomeIcon icon={faUsers}/> Players </h2>  <br/>
              <div class='d-flex justify-content-around bg-blue'>
                   <p class="fs-2 text-white">Total Selected {myChoicePlayers.length}</p> 
                   <p class="fs-2 text-white">Total Cost $ {Math.round(totalYearlySalary)}</p>
              </div>
                
            </div>
           
           <ul className='container'>
               {  myChoicePlayers.map(info=><li class='list-unstyled p-2 bg-white mt-2'><img class='img1' src={info.image}   alt=""/>  ( <span class='text-danger'>Team: {info.team} </span>) <span class='text-bold'>yearly Salary:<FontAwesomeIcon icon={faDollarSign}/> {info.income}</span>  <span><FontAwesomeIcon icon={faMinusSquare}/></span>
               </li>
                )   
                
               }
                           
           </ul>
           
           </div>
       
    )
}

export default Cart