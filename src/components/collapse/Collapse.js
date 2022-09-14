import React, {useState} from 'react'
import './collapse.css'

export default function Collapse(props) {
const [isClose, setIsClose] = useState(false)

  return (
    <div className="ex-cord">
      <div className="ex-ligne">
        <div className="ex-ligne-title" onClick={() => setIsClose(!isClose)}>
          <h4>
            {props.label}
          </h4>
          <h5>{props.name}</h5>
          <h6>{props.text}</h6>
        </div>
        {isClose && <div className="ex-desc">{props.children}</div>}
      </div>
    </div>
  );
}
