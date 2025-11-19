import React from "react";
import SelectedCard from "../../selectedCard/selectedCard";
const SeletedPlayers = ({purchasePlayers, removePlayer}) => {
    console.log(purchasePlayers)
    return (
        <div className="max-w-[1200px] mx-auto">
            {
                purchasePlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SeletedPlayers;