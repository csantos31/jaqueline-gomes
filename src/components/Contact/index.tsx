import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import mailIcon from "../../images/mailicon.svg";

export function ContactComponent() {
  return (
    <>
      <section className="contact">
        <h3>Entre em contato:</h3>

        <div className="social-media">
          <a
            href="https://wa.me/5511980361312"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="icon whatsapp-icon"
              />
              <span>Whatsapp</span>
            </div>
          </a>

          <a
            href="mailto:j.gomes0307@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <img src={mailIcon} alt="mail icon" className="icon mail-icon" />
              <span>E-mail</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export const Contact = React.memo(ContactComponent);
