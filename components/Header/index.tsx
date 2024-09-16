import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";

const Header: React.FC = () => {
  return (
    <div id="heaedr">
      <div className="container">
        <div className="header">

          <h1>Exclusive</h1>
          <div className="header-nav">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Sign Up</a>
          </div>

          <div className="icons">
            <input type="text" placeholder='What are you looking for?'/>

            <a href=""><FaRegHeart /></a>
            <a href=""><SlBasket /></a>
          </div>
        </div> 

        

  
      </div>
    </div>
  );
};

export default Header;
