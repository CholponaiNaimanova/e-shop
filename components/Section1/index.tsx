import React from 'react';
import { MdChevronRight } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import iphonImg from "@/public/assets/img/iphon.png";

const Section1: React.FC = () => {
    return (
        <div className="section">
            <div className="section2">
                <div className="fashion">
                    <h1>Woman’s Fashion <span><MdChevronRight /></span></h1> 
                    <h1>Men’s Fashion <span><MdChevronRight /></span></h1>
                    <h1>Electronics</h1>
                    <h1>Home & Lifestyle</h1>
                    <h1>Medicine</h1>
                    <h1>Sports & Outdoor</h1>
                    <h1>Baby’s & Toys</h1>
                    <h1>Groceries & Pets</h1>
                    <h1>Health & Beauty</h1>
                </div>

                <div className="left"></div>

                <div className="iphon">
                    <div className="off">
                        <h1><BsApple /> <span>iPhone 14 Series</span></h1>
                        <h2>Up to 10% <br /> off Voucher</h2>
                        <h3>Shop Now <span><FaArrowRight /></span></h3>
                    </div>

                    <Image src={iphonImg} alt="iPhone 14" />
                    
                </div>

                <div className="zero">
                    <div className="on"></div>
                    <div className="on"></div>
                    <div className="on"></div>
                    <div className="on"></div>
                    <div className="on"></div>
                </div>
                
            </div>
        </div>
    );
}

export default Section1;
