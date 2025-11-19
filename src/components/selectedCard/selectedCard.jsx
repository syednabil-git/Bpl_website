import React from "react";
const SelectedCard = ({player,removePlayer}) =>
{ 
    console.log(player)
    const handleRemove =()=>{
        removePlayer(player)
    };
    return(
        <div className="flex justify-between items-center mt-5 border-gray-200 border-2 p-3 rounded-xl">
                <div className="flex items-center w-1/2">
                    <img  src={player.player_image} className="h-[50px] w-[50px] rounded-xl"/>
                     <div className="mx-3 w-[400px]">
                    <h1>
                        {player.player_name}
                    </h1>
                    <p>
                        {player.player_role}
                    </p>
                </div>
                </div>
               
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/YFbLNqYb/Frame.png"/>
                </div>
            </div>
    );
};
export default SelectedCard;