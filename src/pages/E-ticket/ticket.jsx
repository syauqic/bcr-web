import React from "react";
import Succes from "../../assets/img/success.svg";
import Download from "../../assets/img/download.svg";
import "./ticket.css";

const Ticket = () => {
  return (
    <>
      <section className="e-ticket">
        <div className="container">
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
      </section>
    </>
  );
};

export default Ticket;
