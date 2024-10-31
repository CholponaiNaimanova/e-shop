import React, { useEffect, useState } from 'react';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { BsSmartwatch } from 'react-icons/bs';
import { CiCamera } from 'react-icons/ci';
import { PiHeadphonesDuotone } from 'react-icons/pi';
import { VscGame } from 'react-icons/vsc';

const Categories: React.FC = () => {
  return (
    <div id="categories">
      <div className="container">
        <div className="categories">
          <div className="our">
            <div className="a"></div>
            <h1>Categories</h1>
          </div>
          <h1>Browse By Category</h1>

          <div className="blocks">
            <div className="block">
              <span>
                <IoPhonePortraitOutline />
              </span>
              <p>Phones</p>
            </div>

            <div className="block">
              <span>
                <HiOutlineComputerDesktop />
              </span>
              <p>Computers</p>
            </div>

            <div className="block">
              <span>
                <BsSmartwatch />
              </span>
              <p>SmartWatch</p>
            </div>

            <div className="block">
              <span>
                <CiCamera />
              </span>
              <p>Camera</p>
            </div>

            <div className="block">
              <span>
                <PiHeadphonesDuotone />
              </span>
              <p>HeadPhones</p>
            </div>

            <div className="block">
              <span>
                <VscGame />{' '}
              </span>
              <p>Gaming</p>
            </div>
          </div>

        <hr />
        </div>
      </div>
    </div>
  );
};

export default Categories;
