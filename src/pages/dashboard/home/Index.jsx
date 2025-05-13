import React from 'react';
import './styles.css';

export default function LocaisPage() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">LOGO</div>
          <div className="nav">
            <a href="#">Home</a>
            <a href="#">Reservas</a>
            <a href="#">Sair</a>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Locais que você já utilizou</h2>
          <div className="card-container">
            {[...Array(4)].map((_, index) => (
              <div className="card" key={`usado-${index}`}>
                <div className="card-image"></div>
                <div className="card-info">
                  <h3>Nome do local</h3>
                  <p>R$ 20/hora</p>
                  <p>Rua Pres. Eduardo filho</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Locais em Curitiba</h2>
          <div className="card-container">
            {[...Array(4)].map((_, index) => (
              <div className="card" key={`curitiba-${index}`}>
                <div className="card-image"></div>
                <div className="card-info">
                  <h3>Nome do local</h3>
                  <p>R$ 20/hora</p>
                  <p>Rua Pres. Eduardo filho</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
