import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style.main_container}>
      <div className={style.main}>
        <h1>Login</h1>
        <form  className={style.login}action="">
          <label>
            <FaRegUser className={style.icon}/>
            <input type="text" name="email" required placeholder="E-mail" />
          </label>
          <label>
            <GiPadlock className={style.icon} />
            <input type="password" name="senha" required placeholder="Senha" />
          </label>
          <Link to="/forgot-password" className={style.forgot_password}>Esqueci Minha Senha</Link>
          <button type="submit">ENTRAR</button>
          <Link to="/register" className={style.register_link}>Não tem conta? Clique aqui!</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
