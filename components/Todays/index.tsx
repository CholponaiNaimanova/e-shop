import React, { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';
import Image from 'next/image';
import lp from '@/public/assets/img/lpl.png';

const Todays: React.FC = () => {
  const initialTime = { days: 3, hours: 23, minutes: 19, seconds: 56 };
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(({ days, hours, minutes, seconds }) => {
        if (seconds > 0) return { days, hours, minutes, seconds: seconds - 1 };
        if (minutes > 0)
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        return initialTime;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div id="todays">
      <div className="container">
        <div className="todo">
          <div className="our">
            <div className="a"></div>
            <h1>Today,s</h1>
          </div>

          <div className="countdown">
            <div className="f">
              <h1>Flash Sales</h1>
            </div>
            <div className="c">
              <h2>Days</h2>
              <span>{timeLeft.days}</span>
            </div>
            <p>:</p>
            <div className="c">
              <h2>Hours</h2>
              <span>{timeLeft.hours!}</span>
            </div>
            <p>:</p>
            <div className="c">
              <h2>Minutes</h2>
              <span>{timeLeft.minutes}</span>
            </div>
            <p>:</p>
            <div className="c">
              <h2>Seconds</h2>
              <span>{timeLeft.seconds}</span>
            </div>
          </div>

          <div className="cards">
            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card">
                <div className="img">
                  <Image src={lp} alt="" className="img" />
                </div>
                <div className="a">
                  <a>
                    <IoMdHeartEmpty />
                  </a>
                  <a>
                    <IoEyeOutline />
                  </a>
                </div>
                <div className="addtocart">Add To Cart</div>
              </div>

              <div className="cardText">
                <p>ASUS FHD Gaming Laptop</p>
                <div className="price">
                  <p>$700</p>
                  <div className="star">
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                    <div className="st">
                      <TiStarFullOutline />
                    </div>
                  </div>
                  <h3>(325)</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="btn">
            <button>View All Products</button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Todays;
