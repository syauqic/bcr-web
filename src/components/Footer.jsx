import React from "react";
import { Row } from "react-bootstrap";
import fbIcon from "../assets/img/icon_facebook.png";

export const Footer = () => {
  return (
    <section className="mb-3 pt-5" id="footer">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div className="fw-bold">
            <div className="mb-2">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </div>
            <div className="mb-2">binarcarrental@gmail.com</div>
            <div className="mb-2">081-233-334-808</div>
          </div>
          <div className="menu">
            <Row>
              <a
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="/#feature"
              >
                {" "}
                Our Services
              </a>
            </Row>
            <Row>
              <a
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="/#why-us"
              >
                {" "}
                Why Us
              </a>
            </Row>
            <Row>
              <a
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="#testimonial"
              >
                {" "}
                Testimonial
              </a>
            </Row>
            <Row>
              <a
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="#faq"
              >
                FAQ
              </a>
            </Row>
          </div>

          <div>
            <div className="fw-bold mb-2">Connect with us</div>
            <div className="d-flex gap-2">
              <a href="https://web.facebook.com/binaracademy">
                <img src="./assets/img/icon_facebook.png" alt="fbIcon"></img>
              </a>
              <a href="https://www.instagram.com/academybinar/">
                <img src="./assets/img/icon_instagram.png" alt="igcon"></img>
              </a>
              <a href="https://twitter.com/academybinar">
                <img src="./assets/img/icon_twitter.png" alt="twtIcon"></img>
              </a>
              <a href="https://linktr.ee/binaracademy">
                <img src="./assets/img/icon_mail.png" alt="emailIcon"></img>
              </a>
              <a href="https://linktr.ee/binaracademy">
                <img src="./assets/img/icon_twitch.png" alt="twitchIcon"></img>
              </a>
            </div>
          </div>
          <div>
            <div className="fw-bold mb-2">Copyright Binar 2023</div>
            <div>
              <span className="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
