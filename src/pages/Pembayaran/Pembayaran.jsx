import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import "./Pembayaran.css";
import { Row, Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Navigation } from "../../components/Navigation";
import { Stepper, Step } from "react-form-stepper";
import MethodPembayaran from "../../components/step-pembayaran/DetailPembayaran/MethodPembayaran";
import UploadPembayaran from "../../components/step-pembayaran/Pembayaran/Upload-Pembayaran";
import Auth from "../../components/auth/index";
import Eticket from "../../components/step-pembayaran/E-ticket/ticket";
import DetailPesanan from "../../components/DetailPesanan/DetailPesanan";
import FilePDF from "../../components/Pdf/FilePDF";
import { useParams } from "react-router-dom";
const Pembayaran = () => {
  const [content, setContent] = useState(0);
  const { id } = useParams();
  const RenderContent = () => {
    if (content === 0)
      return (
        <MethodPembayaran
          onClickStepper={(step) => setContent(step)}
          dataId={id}
        />
      );
    if (content === 1)
      return (
        <UploadPembayaran
          onClickStepper={(step) => setContent(step)}
          dataId={id}
        />
      );
    if (content === 2) return <Eticket dataId={id} />;
    if (content === 3) return <FilePDF dataId={id} />;
  };
  return (
    <>
      <Auth>
        <Navigation />
        <div className="payment">
          <div className="container">
            <Col>
              <Row>
                <div className="col-lg-5 mb-5">
                  <button
                    className="fs-6 fw-bold btn-previous"
                    onClick={() => setContent(0)}
                  >
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
        <DetailPesanan dataId={id} />
        {RenderContent()}
        <Footer />
      </Auth>
    </>
  );
};
export default Pembayaran;
