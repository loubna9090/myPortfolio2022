import React from 'react'
import './workListe.css'
import Work from '../work/Work'
import { works } from '../../data'

export default function WorkListe() {
  return (
    <div className="wl" id="works">
      <div className="wl-text">
        <h2 className="wl-title">Some Work</h2>
        {/* <p className="wl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt
          sint illum.
        </p> */}
      </div>
      <div className="wl-list">
        {works.map((item) => (
          <Work key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
}
