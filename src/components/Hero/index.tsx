import React from "react";
import "./styles.scss";
import profileImage from "../../images/profile.jpg";

export function HeroComponent() {
  return (
    <>
      <header>
        <div className="image">
          <img src={profileImage} alt="Profile image" />
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
      </header>
    </>
  );
}

export const Hero = React.memo(HeroComponent);
