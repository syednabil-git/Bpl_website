import React, { useState } from "react";
import GroupImg from "../../assets/Group.png";
import FlagImg from "../../assets/flag.png";
import { toast } from "react-toastify";
const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasePlayers,setPurchasePlayers}) =>{
    const [isSelected,setIsSelected] = useState(false)

    const handleSelected= (playerData) => {
        const playerPrice = parseInt(playerData.price)
        if(availableBalance<playerPrice){
            toast("not enoungh coins!!")
            return
        }
        if (purchasePlayers.length === 6){
          toast("6 player already selected!")
          return
        }
        setIsSelected(true)
        setAvailableBalance(
            availableBalance - playerPrice
        );
        setPurchasePlayers([...purchasePlayers,playerData])
        toast("Player Purchased")
    };
    return (
       <div className=" bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img className="w-full h-[300px] object-cover"
      src={player.player_image}
      alt="" />
  </figure>
  <div className="mt-4">
    <div className="flex items-center gap-3"><span> <img src={GroupImg} alt="g" /></span>
    <h2 className="card-title ">{player.player_name}</h2></div>
    <div className="flex justify-between items-center mt-4 border-b border-gray-100 mb-2 pb-2">
      <div className="flex items-center gap-2"><span> <img src={FlagImg} alt="g" /></span>
      <span className="text-gray-500">{player.player_country}</span></div>
      <div className="bg-gray-100 rounded-sm"><span className="text-black p-1">{player.player_role}</span></div>
    </div>
    <div className="flex justify-between items-center">
    <span className="font-bold">Rating</span>
    <span>{player.rating}</span>
    </div>
    <div className="flex justify-between items-center">
    <span className="font-bold">{player.player_batting_style}</span>
    <span>{player.player_balling_style}</span>
    </div>
    <div className="flex justify-between items-center">
    <span className="font-bold">Price: <span>{player.price}</span></span>
    <button disabled={isSelected} onClick={()=>{handleSelected(player)}} 
    className="btn shadow-2xl">
        {isSelected===true?"Selected":"Choose Player"}
        </button>
    </div>

   </div>
  </div>
    );
};
export default PlayerCard;