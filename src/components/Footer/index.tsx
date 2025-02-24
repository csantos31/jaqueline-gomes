import React from "react";
import "./styles.scss";

export function FooterComponent() {
  return (
    <>
      <footer className="footer">
        <h3>© Todos os direitos reservados - 2025</h3>
      </footer>
    </>
  );
}

export const Footer = React.memo(FooterComponent);
