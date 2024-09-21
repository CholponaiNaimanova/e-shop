import React, { useState } from 'react';
import { MdChevronRight } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import iphonImg from "@/public/assets/img/iphon.png";

const Section1: React.FC = () => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

 
    const categories = [
        { title: "Woman’s Fashion", subs: ["Elegant dresses", "Coats", "Bags"] },
        { title: "Men’s Fashion", subs: ["Suits", "Watches", "loafers"] },
        { title: "Electronics", subs: ["Gadgets", "Devices", "Technologies"] },
        { title: "Home & Lifestyle", subs: ["Interior Design", "Sustainability", "Organization"] },
        { title: "Medicine", subs: ["Diagnosis", "Treatment", "Prevention"] },
        { title: "Sports & Outdoor", subs: ["Fitness", "Adventure", "Athletics"] },
        { title: "Baby’s & Toys", subs: ["Infants", "Playtime", "Development"] },
        { title: "Groceries & Pets", subs: ["Food", "Supplies", "Care"] },
        { title: "Health & Beauty", subs: ["Skincare", "Wellness", "Makeup"] },
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index); 
    };

    return (
        <div className="section">
            <div className="section2">
            <div className="fashion">
    <div>
        {categories.map((category, index) => (
            <div key={index}>
                <h1 onClick={() => toggleExpand(index)}>
                    {category.title}
                </h1>
                {expandedIndex === index && (
                    <div className="subs">
                        {category.subs.map((sub, subIndex) => (
                            <h2 key={subIndex}>{sub}</h2>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>

    <div className="span">
        <span><MdChevronRight /></span>
    </div>

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