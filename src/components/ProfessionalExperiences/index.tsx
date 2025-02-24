import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "../Card";
import externalDataSample from "../../data/content.json";
import { CardItem } from "../../types/Card";
import profile from '../../images/profile.jpg'

export function ProfessionalExperiencesComponent() {
  const [professionalExperiences, setProfessionalExperiences] = useState<CardItem[] | null>([]);

  useEffect(() => {
    setProfessionalExperiences(externalDataSample.professionalExperiences);
  }, []);

  return (
    <section className="professional-experiences">
      <h2>Experiências profissionais</h2>
      <div className="content">
        <div className="experiences">
          {professionalExperiences?.map((experienceItem) => {
            return (
              <Card
                name={experienceItem.name}
                description={experienceItem.description}
              />
            );
          })}
        </div>
        <div className="image">
          <img src={profile} alt="Foto de perfil profissional" />
        </div>
      </div>
    </section>
  );
}

export const ProfissionalExperiences = React.memo(ProfessionalExperiencesComponent);
