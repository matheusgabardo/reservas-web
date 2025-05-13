import React from 'react';
import './styles.css'

export default function RegisterPage() {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="logo">LOGO</div>
                    <input type="email" placeholder="Email" className="input" />
                    <input type="text" placeholder="Nome completo" className="input" />
                    <input type="password" placeholder="Senha" className="input" />

                    <div className="checkbox-container">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Concordo com os termos de uso.</label>
                    </div>

                    <button className="register-button">Criar conta</button>
                </div>
            </div>
        </>
    );
}
