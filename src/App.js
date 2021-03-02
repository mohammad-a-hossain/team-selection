import './App.css'
import Header from './components/headers/Header';
import Teams from './components/teams/Teams'
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from './components/fakeData/fakeData.json'
import {useState} from 'react'
import Cart from './components/cart/Cart'
import Footer from './components/footer/Footer'




function App() {
  const data=[...fakeData]
  const [players, setPlayers] = useState(data)
  
  const [selectPlayers,setSelectPlayers] = useState([]) 
  
         const addPlayersHandler=(players)=>{
          const newSelectPlayers= [...selectPlayers,players]
          setSelectPlayers(newSelectPlayers) 
       } 
    
  return (
    <div>
      <Header></Header>
      <div class='container-fluid d-flex  col-lg-12'>
                <div class="container bg-success row  d-flex col-lg-8">
       {
          players.map(players =><Teams players={players} btn={addPlayersHandler} key={players.id}/>)   
     
       }
        </div>
        <div class='container col-lg-4 row  bg-success'>
                <Cart selectPlayers={selectPlayers} /> 
       </div>
     </div>
   <Footer/>
  </div>

  )
}

export default App;

