import { Suspense, useState,toggle } from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SeletedPlayers from './components/AvailablePlayers/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';

const fetchPlayers = async () => {
  const res = await fetch ("/player.json")
  return res.json()
}
const playersPromise = fetchPlayers()
function App() {
  const [toggle,setToggel] = useState(true)
  const [availableBalance,setAvailableBalance] = useState(60000000)
  const [purchasePlayers,setPurchasePlayers] = useState([])

  const removePlayer = (p) =>{
    const fileterData= purchasePlayers.filter(ply => ply.player_name!==p.player_name)
  
    setPurchasePlayers(fileterData)
    setAvailableBalance (availableBalance + p.price)
  }
  
  return (
    <>
        <Navbar availableBalance={availableBalance}></Navbar>
        <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-5'>
          <h2 className='font-bold text-2xl'>{toggle === true?"Available Player":`Selected Player (${purchasePlayers.length}/6)`}</h2>
          <div>
            <button onClick={()=>setToggel(true)} className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 font-semibold ${toggle===true?"bg-[#E7FE29]":""} `}>Available</button>
            <button onClick={()=>setToggel(false)} className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 font-semibold ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>({purchasePlayers.length})</span></button>
          </div>
        </div>

        {
          toggle === true?<Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>} >
           <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise = {playersPromise}></AvailablePlayers>
          </Suspense>:<SeletedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SeletedPlayers>
        }
           
      <ToastContainer/> 
    </>
  );
}

export default App
