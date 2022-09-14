import React from "react";
import "./intro.css";
import Loubna from "../../img/loubna.png";
import Navbar from "../navbar/Navbar";

export default function Intro() {
  return (
    <div className="i" id="/">
      <Navbar />
      <div className="i-left">
        <div className="i-left-wrap">
          <h2 className="i-intro">Hi, I'm </h2>
          <h1 className="i-name">Loubna Damri</h1>
          <div className="i-title">
            <div className="i-title-wrp">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front / Back End </div>
              <div className="i-title-item">UI/UX designer</div>
              <div className="i-title-item">Graphic designer</div>
            </div>
          </div>
          {/* <div className="i-desc">
                        <p>Motivated by the idea of ​​joining an establishment specializing in digital, technology and innovation, I am looking for an experience that will allow me to highlight my passion and my knowledge in web and mobile creation.</p>
                    </div> */}
        </div>
      </div>
      <div className="i-right">
        <img src={Loubna} className="i-img" alt="Loubna_damri" />
      </div>
    </div>
  );
}
