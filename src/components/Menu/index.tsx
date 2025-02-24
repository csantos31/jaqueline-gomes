import React from "react";
import "./styles.scss";

export function MenuComponent() {
  return (
    <>
      <div className="menu">
        <h3>PSICÓLOGA E NEUROPSICÓLOGA</h3>
      </div>
    </>
  );
}

export const Menu = React.memo(MenuComponent);
