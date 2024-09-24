import React from 'react';
import Image from 'next/image';
import playstation from "@/public/assets/img/playstation.png"
import women from "@/public/assets/img/woman.png"
import amazon from "@/public/assets/img/amazonEcho.png"
import gucci from "@/public/assets/img/gucci.png"
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiOutlineShieldCheck } from "react-icons/hi2";


const Featured: React.FC = () => (
    <div className="arrival">
        <div className="container">
            <div className="arrivall">
                <div className="fea">
                    <div className="a"></div>
                    <h1>Featured</h1>
                </div>
                <h1>New Arrival</h1>

                <div className="shopNow">

                    <div className="block1">
                        <Image src={playstation} alt="" className='img' />
                        <div className="blockText">
                            <h1>PlayStation 5</h1>
                            <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <h2>Shop Now</h2>
                        </div>
                    </div>

                    <div className="">
                        <div className="block2">
                            <Image src={women} alt="" className='img' />
                            <div className="blockText">
                                <h1>Women’s Collections</h1>
                                <p>Featured woman collections that <br /> give you another vibe.</p>
                                <h2>Shop Now</h2>
                            </div>
                        </div>

                        <div className="imgTwo">
                            <div className="blockOne">
                                <Image src={amazon} alt="" className='img' />
                                <div className="blockText">
                                    <h1>Speakers</h1>
                                    <p>Amazon wireless speakers</p>
                                    <h2>Shop Now</h2>
                                </div>
                            </div>

                            <div className="blockOne">
                                <Image src={gucci} alt="" className='img' />
                                <div className="blockText">
                                    <h1>Perfume</h1>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <h2>Shop Now</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="data">
                    <div className="circle">

                        <div className="circleText">
                        <div className="on">
                            <div className="onn">
                            <a><TbTruckDelivery />
                            </a>
                            </div>
                        </div>
                        <div className="onText">
                        <h1>FREE AND FAST DELIVERY</h1>
                        <p>Free delivery for all orders over $140</p>
                        </div>
                        </div>

                        <div className="circleText">
                        <div className="on">
                        <div className="onn">
                            <a><RiCustomerServiceLine />
                            </a>
                            </div>
                        </div>
                        <div className="onText">
                            <h1>24/7 CUSTOMER SERVICE</h1>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                        </div>

                        <div className="circleText">
                        <div className="on">
                        <div className="onn">
                            <a><HiOutlineShieldCheck />
                            </a>
                            </div>
                        </div>
                        <div className="onText">
                            <h1>MONEY BACK GUARANTEE</h1>
                            <p>We reurn money within 30 days</p>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
)

export default Featured