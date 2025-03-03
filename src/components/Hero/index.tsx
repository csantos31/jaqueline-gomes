import React from "react";
import "./styles.scss";
import profileImage from "../../images/profile.jpg";
import logoImage from "../../images/logo.png";

export function HeroComponent() {
  return (
    <>
      <header>
        <div className="logo-image">
          <img src={logoImage} alt="Logo" />
        </div>

        <div className="presentation">
          <div className="image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="headline">
            <h2>Profissional em Psicologia e Neuropsicologia</h2>
            <br />
            <span>
              Trabalhar na área de saúde mental é uma jornada de aprendizado
              mútuo, onde o respeito e a compreensão são pilares fundamentais
              envolvendo dedicação e comprometimento. É um convite constante à
              reflexão e ao aprimoramento, tanto do indivíduo que busca ajuda
              quanto do profissional que se dedica a ouvir e apoiar.
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export const Hero = React.memo(HeroComponent);
