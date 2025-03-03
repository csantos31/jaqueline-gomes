import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "../Card";
import externalDataSample from "../../data/content.json";
import { CardItem } from "../../types/Card";
import psicoloLogo from '../../images/psico-logo.jpg'

export function BackgroundComponent() {
  const [backgroundItems, setBackgroundItems] = useState<CardItem[] | null>([]);

  useEffect(() => {
    setBackgroundItems(externalDataSample.background);
  }, []);

  return (
    <section className="background">
      <h2>Formação Acadêmica</h2>
      <div className="content">
        <div>
          {backgroundItems?.map((backgroundItem) => {
            return (
              <Card
                name={backgroundItem.name}
                description={backgroundItem.description}
              />
            );
          })}
        </div>
        {/* <div className="image">
          <img src={psicoloLogo} alt="Logo do símbolo do psicólogo" />
        </div> */}
      </div>
    </section>
  );
}

export const Background = React.memo(BackgroundComponent);
