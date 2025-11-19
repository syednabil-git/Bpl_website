import React from "react";
import navImg from "../../assets/logo.png"
import coinImg from "../../assets/coins.png"
const Navbar = ({availableBalance}) => {
    return (
        
             <div className=" max-w-[1200px] mx-auto border-2 border-e-amber-400 flex justify-between">
               <div className="">
                <a className="">
                <img src={navImg} alt='logo'/>
                </a>
                </div>
                <div className="flex items-center gap-2 justify-between">
                   <span>{availableBalance}</span>
                   <span>coin</span>
                   <span><img className='w-[25px]' src={coinImg} /></span>
                 </div>
                </div>
        
    );
};

export default Navbar;