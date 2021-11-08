import React from 'react'

import ButtonSignUp from '../ButtonSignUp'
import Input from '../Input'

import './styles.scss'

const Form = () => {
  return (
    <form className="form">
      <h2>User Manager</h2>

      <p className="welcome-text">Cadastre e gerencie todos os seus usuários</p>

      <Input type={'email'} label={'E-mail'} icon={"carbon:email"} />
      <Input type={'password'} label={'Senha'} icon={"bi:eye-slash"} />

      <ButtonSignUp />

      <p className="sign-in-text">Já possui uma conta? <span>Entrar</span></p>

    </form>
  )
}

export default Form

