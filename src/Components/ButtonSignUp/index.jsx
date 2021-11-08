import React from 'react'
import './styles.scss'

const ButtonSignUp = () => {
  return (
    <button className="button-sign-up" onClick={(e) => { e.preventDefault() }}>
      CRIAR CONTA
    </button>
  )
}

export default ButtonSignUp
