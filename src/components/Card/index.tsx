import React from "react";
import "./styles.scss";
import { CardItem } from "../../types/Card";

export function CardComponent({
  name,
  description,
}: CardItem) {
  return (
    <>
      <div className="projectItem">
        <div className="description">
          <h1>{name}</h1>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
}

export const Card = React.memo(CardComponent);
