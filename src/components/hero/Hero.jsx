import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container ">
        {/* left side  */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="pink-circle"/>
                <h1>
                    Welcome <br />
                    To<br /> Rotaract  
                </h1>
            </div>

            <div className="flexColStart hero-des">
                <span className="">Empowering youth, serving communities!</span>
            </div>

            <div className="flexCenter search-bar">
                <HiLocationMarker color = "#a50050" size ={25} />
                <input type="text" />
                <button className="button">Search</button>
            </div>

            <div className="flexCenter stats ">
                <div className="flexColCenter  stat">
                    <span> <CountUp start={8880} end={9000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Premium Products</span> 
                </div>

                <div className="flexColCenter stat">
                    <span> <CountUp start={1950} end={2000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Happy Costumers</span> 
                </div>

                <div className="flexColCenter stat">
                    <span> <CountUp  end={28} duration={4} />
                        <span>+</span>
                    </span>
                    <span className="secondaryText">Award Winnings</span> 
                </div>

            </div>

            
        </div>
        {/* right side  */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./logoo.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
