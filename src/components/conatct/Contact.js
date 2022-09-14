import React from 'react'
import './contact.css'
import logoCont from '../../img/logo.png'

export default function Contact() {
  return (
    <div className="cont" id="contact">
      <div>
        {" "}
        <h2 className="cont-title">Contact</h2>
      </div>
      <div className="cont-bolck">
        <div className="cont-img-logo">
          <img src={logoCont} alt="loubna_damri" />
        </div>
        <div className="cont-conatct">
          <div className="elem-cont email">
            <a href="mailto:loubnadamri@gmail.com" target="_blank">
              <h3 class="bold">
                <i class="fas fa-envelope" aria-hidden="true"></i>Email
              </h3>
            </a>
          </div>
          <div className=" elem-cont linked">
            <a
              href="https://www.linkedin.com/in/loubna-damri-b0170143/"
              target="_blank"
            >
              <h3 class="bold">
                <i class="fab fa-linkedin" aria-hidden="true"></i>Linkedin
              </h3>
            </a>
          </div>
          <div className="elem-cont github">
            <a href="https://github.com/loubna9090" target="_blank">
              <h3 class="bold">
                <i class="fab fa-github" aria-hidden="true"></i>Github
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

