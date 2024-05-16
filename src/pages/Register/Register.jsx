import React from 'react';
import style from './Register.module.css';

const Register = () => {
  return (
    <div className={style.register_container}>
      <h1>Cadastre-se</h1>
      <h2>É rápido e fácil.</h2>
      <form action="" className={style.register_form}>
        <div className={style.name_fields}>
          <input type="text" required placeholder='Nome' />
          <input type="text" required placeholder='Sobrenome' />
        </div>
        <input type="text" required placeholder='E-mail ou telefone' />
        <input type="password" required placeholder='Nova senha' />

        <h2>Data de Nascimento</h2>
        <div className={style.dob_fields}>
          <input type="number" required placeholder='Dia' />
          <input type="number" required placeholder='Mês' />
          <input type="number" required placeholder='Ano' />
        </div>

        <button type="submit">CADASTRE-SE</button>
      </form>
    </div>
  );
}

export default Register;
