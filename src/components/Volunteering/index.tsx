import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "../Card";
import externalDataSample from "../../data/content.json";
import { CardItem } from "../../types/Card";
import neuropsico from '../../images/neuropsicology.jpg'

export function VolunteeringComponent() {
  const [volunteeringItems, setVolunteeringItems] = useState<CardItem[] | null>([]);

  useEffect(() => {
    setVolunteeringItems(externalDataSample.volunteering);
  }, []);

  return (
    <section className="volunteering">
      <h2>Voluntariado</h2>
      <div className="content">
        <div>
          {volunteeringItems?.map((volunteeringItem, key) => {
            return (
              <Card
                key={key}
                name={volunteeringItem.name}
                description={volunteeringItem.description}
              />
            );
          })}
        </div>
        <div className="image">
          <img src={neuropsico} alt="Logo do símbolo do psicólogo" />
        </div>
      </div>
    </section>
  );
}

export const Volunteering = React.memo(VolunteeringComponent);
