import React from 'react';
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import { TbCopyright } from "react-icons/tb";
import { PiPaperPlaneRight } from "react-icons/pi";
import Image from 'next/image';
import QrCode from "@/public/assets/img/QrCode.png";
import GooglePlay from "@/public/assets/img/googleplay.png";
import AppStore from "@/public/assets/img/googleplay.png";

const Footer: React.FC = () => {
    return(
        <div id="footer">
            <div className=" bg-black w-[1510px] h-[440px] text-white pt-[80px]">
                <div className="footer flex justify-center gap-[80px] ">

                    <div className="text1 ">
                        <h1 className='font-bold text-[24px] leading-[24px] pb-[30px]'>Exclusive</h1>
                        <h2 className='leading-[28px] font-medium text-[20px] pb-[30px]'>Subscribe</h2>
                        <p className=' font-normal text-[16px] leading-[24px] pb-[20px]'>Get 10% off your first order</p>

                        <div className='relative w-[217px] h-[48px]'>
                            <input 
                              type="text" 
                              placeholder='Enter your email' 
                              className=' placeholder:pl-[10px] p-[12px 48px 12px 16px] border-[1.5px] rounded-[4px] w-full h-full bg-inherit'
                            />
                            <a className='absolute top-[12px] right-[16px] text-[20px] cursor-pointer'>
                              <PiPaperPlaneRight />
                            </a>
                        </div>
                    </div>

                    <div className="text2">
                        <h1 className='leading-[28px] font-medium text-[20px] pb-[30px]'>Support</h1>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[30px]'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</h2>
                        <h3 className='font-normal text-[16px] leading-[24px] pb-[20px]'>exclusive@gmail.com</h3>
                        <h4 className='font-normal text-[16px] leading-[24px]'>+88015-88888-9999</h4>
                    </div>

                    <div className="text3">
                        <h1 className='leading-[28px] font-medium text-[20px] pb-[20px]'>Account</h1>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>My Account</h2>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>Login / Register</h2>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>Cart</h2>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>Wishlist</h2>
                        <h2 className='font-normal text-[16px] leading-[24px]'>Shop</h2>

                    </div>

                    <div className="text4">
                        <h1 className='leading-[28px] font-medium text-[20px] pb-[20px]'>Quick Link</h1>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>Terms Of Use</h2>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>FAQ</h2>
                        <h2 className='font-normal text-[16px] leading-[24px] pb-[20px]'>Contact</h2>
                    </div>

                    <div className="text5 flex flex-col gap-[10px]">

                        <h1 className='leading-[28px] font-medium text-[20px] pb-[10px]'>Download App</h1>
                        <p className='font-medium text-[12px] leading-[18px] text-[#f9f9f9bb]'>Save $3 with App New User Only</p>

                        <div className="img flex gap-[7px]">
                            <Image src={QrCode} alt="" />

                            <div className="googleAndApp flex flex-col gap-[10px]">
                                <Image src={GooglePlay} alt="" />
                                <Image src={AppStore} alt="" />
                            </div>

                            
                        </div>
                        <div className="icons cursor-pointer flex items-center gap-[30px] text-[24px] pt-[20px] pb-[90px]">
                                <a><RiFacebookLine /></a>
                                <a><FiTwitter /></a>
                                <a><RxInstagramLogo /></a>
                                <a><RiLinkedinLine /></a>
                            </div>
                    </div>



                </div>
                <hr className=' pb-[20px]' />
                <p className=' text-[16px] leading-[24px] font-normal text-[#f9f9f95c] flex items-center justify-center gap-[5px]'> <span className=' text-[24px]'><TbCopyright /></span> Copyright Rimel 2022. All right reserved</p>

            </div>
        </div>
    )
}

export default Footer