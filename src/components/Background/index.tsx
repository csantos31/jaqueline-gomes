import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "../Card";
import externalDataSample from "../../data/content.json";
import { CardItem } from "../../types/Card";

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
          {backgroundItems?.map((backgroundItem, key) => {
            return (
              <Card
                key={key}
                name={backgroundItem.name}
                description={backgroundItem.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Background = React.memo(BackgroundComponent);
