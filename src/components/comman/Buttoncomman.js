import React from 'react'
import "../../components/comman/Buttoncomman.css"

function Buttoncomman({text}) {
  return (
    <div>
          <button className="comman-button rounded-pill">{text}</button>
    </div>
  )
}

export default Buttoncomman