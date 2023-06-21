import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import "./Pembayaran.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Navigation } from "../../components/Navigation";
import { Stepper, Step } from "react-form-stepper";
import MethodPembayaran from "../../components/step-pembayaran/DetailPembayaran/MethodPembayaran";
import KonfirmasiPembayaran from "../../components/step-pembayaran/Pembayaran/Pembayaran";
const Pembayaran = () => {
  const [content, setContent] = useState(0);
  const RenderContent = () => {
    if (content === 0)
      return <MethodPembayaran onClickStepper={(step) => setContent(step)} />;
    if (content === 1)
      return (
        <KonfirmasiPembayaran onClickStepper={(step) => setContent(step)} />
      );
    if (content === 2) return <p>sadasdsad</p>;
  };
  return (
    <>
      <Navigation />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-5 mb-5">
                <button className="fs-6 fw-bold btn-previous">
                  <FaArrowLeft className="me-3 mb-1" />
                  Pembayaran
                </button>
              </div>
              <div className="col-lg-7 d-flex justify-content-end align-items-center">
                <Stepper activeStep={content}>
                  <Step label="Pilih Metode" onClick={() => setContent(0)} />
                  <Step label="Bayar" onClick={() => setContent(1)} />
                  <Step label="Tiket" onClick={() => setContent(2)} />
                </Stepper>
              </div>
            </Row>
          </Col>
        </div>
      </div>
      <Container>
        <Card className="detail-box">
          <Row>
            <p className="fw-bold">Detail Pesananmu</p>
            <Col>
              <label>Nama Mobil</label>
              <p className="disable">Innova</p>
            </Col>
            <Col>
              <label>Kategori</label>
              <p className="disable">6 - 8 orang</p>
            </Col>
            <Col>
              <label>Tanggal Mulai Sewa</label>
              <p className="disable">2 Jun 2022</p>
            </Col>
            <Col>
              <label>Tanggal Akhir Sewa</label>
              <p className="disable">8 Jun 2022</p>
            </Col>
          </Row>
        </Card>
      </Container>
      {RenderContent()}
      <Footer />
    </>
  );
};
export default Pembayaran;
