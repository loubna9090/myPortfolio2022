import React from 'react'
import './work.css'

export default function Work({img}) {
  return (
    <div className="w">
      <img src={img} alt="" className="w-img" />
    </div>
  )
}
