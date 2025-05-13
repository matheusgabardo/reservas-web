import React from 'react';
import './styles.css';

export default function LoginPage() {
  return (
    <>
      <div className="container">
        <div className="login-box">
          <div className="logo">LOGO</div>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <button className="login-button">Entrar</button>
        </div>
      </div>
    </>
  );
}
