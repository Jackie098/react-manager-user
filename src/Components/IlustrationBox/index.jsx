import React from 'react'
import './styles.scss'

import Svg from '../../Assets/Images/undraw_performance.svg'

const IllustrationBox = () => {
  return (
    <div className="illustration-box">
      <img src={Svg} alt="svg" />
    </div>
  )
}

export default IllustrationBox