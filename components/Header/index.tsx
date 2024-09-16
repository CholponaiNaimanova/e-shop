import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <div id="header">
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
            <div className="input">
            <input type="text" placeholder='What are you looking for?'/>
            <p><FiSearch/></p>
            </div>

            <a href=""><IoMdHeartEmpty/></a>
            <a href=""><SlBasket /></a>
          </div>
        </div> 

        

  
      </div>
    </div>
  );
};

export default Header;
