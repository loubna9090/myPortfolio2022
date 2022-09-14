import React from 'react'
import "./about.css"
import Damri from "../../img/loubna-damri.jpg"
import Its from "../../img/its.png"


export default function About() {
    return (
      <div className="a" id="about">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Damri} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h2 className="a-title"> About Me</h2>
          <p className="a-desc">
            Motivated by the idea of ​​joining an establishment specializing in
            digital, technology and innovation, I am looking for an experience
            that will allow me to highlight my passion and my knowledge in web
            and mobile creation.
          </p>
          <div className="a-its">
            <img
              src={Its}
              className="a-its-img"
              alt="Language de programation"
            />
          </div>
        </div>
      </div>
    );
}
