import React from "react";
import { Link } from "react-router-dom";
import Arrowleft from "../../assets/img/arrow-left.svg";
import Rect from "../../assets/img/rect.svg";
import Succes from "../../assets/img/success.svg";
import Download from "../../assets/img/download.svg";
import "./ticket.css";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";

const Ticket = () => {
  return (
    <>
      <Navigation />
      <section className="e-ticket">
        <div className="bg">
          <div className="container">
            <div className="payment-nav">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="back-button">
                      <Link to={"/"}>
                        <img src={Arrowleft} alt="back" />
                      </Link>
                    </div>
                    <h4>ipsum</h4>
                  </div>
                  <div className="col-md-8">
                    <div className="state-payment">
                      <div className="one">1</div>
                      <h5>Pilih Metode</h5>
                      <img src={Rect} alt="-" />
                      <div className="two">2</div>
                      <h5>Bayar</h5>
                      <img src={Rect} alt="-" />
                      <div className="three">3</div>
                      <h5>Tiket</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket">
              <img src={Succes} alt="" />
              <h3>Pembayaran Berhasil</h3>
              <h5>Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
              <div className="print-ticket">
                <div className="invoice-head">
                  <div className="invoice-desc">
                    <h4>Invoice</h4>
                    <p>*invoice number</p>
                  </div>
                  <div className="download-btn">
                    <img src={Download} alt="" />
                    <h4>Unduh</h4>
                  </div>
                </div>
                <div className="pdf-viewer"></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Ticket;
