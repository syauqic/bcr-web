import React, { useState } from "react";
import "./payment02.css";
import Copy from "../../../assets/img/fi_copy.png";
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  FormLabel,
  Tabs,
  Tab,
} from "react-bootstrap";
import CountDown from "./countdown";
import Upload from "../UploadPembayaran/Upload";

const UploadPembayaran = (props) => {
  const { onClickStepper } = props;
  const [upload, setUpload] = useState(0);
  const RenderContentUpload = () => {
    if (upload === 0)
      return <Konfirmasi onClickUpload={(step) => setUpload(step)} />;
    if (upload === 1) return <Upload />;
  };

  const [filePreview, setFilePreview] = useState();

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFiles = e.dataTransfer.files;
    setFilePreview(selectedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChangeFile = (e) => {
    const selectedFiles = e.target.files;
    setFilePreview(selectedFiles[0]);
    e.target.value = "";
  };

  const handleRemovePreview = (e) => {
    setFilePreview("");
    e.target.value = "";
  };
  const MetodePemabayaran = localStorage.getItem("bank");

  function Konfirmasi(props) {
    const { onClickUpload } = props;
    return (
      <Card className="p-3 mt-3">
        <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
        <Button className="w-100 btn-success" onClick={() => onClickUpload(1)}>
          Konfirmasi Pembayaran
        </Button>
      </Card>
    );
  }

  function Upload() {
    return (
      <Card className="p-3 mt-3">
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold">Konfirmasi Pembayaran</p>
          </div>
          <div>
            <CountDown duration={10 * 60 * 1000} />
          </div>
        </div>
        <p>
          Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan
          segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
          konfirmasi.
        </p>
        <p>Upload Bukti Pembayaran</p>
        <p>
          Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload
          bukti bayarmu
        </p>
        <div
          draggable
          className="wrapper_file-uploader"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <label
            htmlFor="upload"
            className="label_file-uploader d-flex justify-content-center align-items-center"
          >
            {filePreview ? (
              <div style={{ width: "100%" }}>
                <img
                  src={URL.createObjectURL(filePreview)}
                  alt="img-preview"
                  className="d-block"
                  style={{ width: "100%" }}
                />
                <div>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={handleRemovePreview}
                    className="d-block"
                    style={{ width: "100%" }}
                  >
                    remove
                  </Button>
                </div>
              </div>
            ) : (
              <span>Upload or Drag file here</span>
            )}
            <input
              type="file"
              name="upload"
              id="upload"
              accept=".png, .jpg, .jpeg"
              onChange={handleChangeFile}
            />
          </label>
        </div>
        <Button className="w-100 btn-success" onClick={() => onClickStepper(2)}>
          Upload
        </Button>
      </Card>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={7}>
            <Card className="p-3 mt-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-bold">Selesaikan Pembayaran Sebelum</p>
                  <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                </div>
                <div>
                  <CountDown duration={24 * 60 * 60 * 1000} />
                </div>
              </div>
            </Card>
            <Card className="p-3 mt-3">
              <p className="fw-bold">Lakukan Transfer Ke</p>
              <ListGroup variant="flush border-bottom border-top-0 list-group-payment">
                <ListGroup.Item>
                  <div className="d-flex">
                    <Button
                      variant="outline-dark button-tf"
                      className="disable"
                    >
                      {MetodePemabayaran}
                    </Button>
                    <div className="Pemilik">
                      <p className="fw-bold"></p>
                      <p> a.n Binar Car Rental</p>
                    </div>
                  </div>
                  <FormLabel>No. Rekening</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="1387653928"
                    ></FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                  <FormLabel>Nominal</FormLabel>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="disable"
                      placeholder="Rp. 3.500.000"
                    ></FormControl>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      className="disable"
                    >
                      <img src={Copy} alt="Copy"></img>
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="p-3 mt-3">
              <Card.Title className="m-3">Intruksi Pembayaran</Card.Title>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                className="mb-3 justify-content-center"
              >
                <Tab eventKey="ATM" title="ATM BCA">
                  <ul>
                    <li>Masukkan Kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu "Transaksi Lainnya" - "Transfer" - "ke Rek BCA
                      Virtual Account"
                    </li>
                    <li>
                      Masukkan nomor BCA Virtual Account : 70020+Order ID Contoh
                      : No. Peserta : 12345789, maka ditulis 7002012345789
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti intruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </ul>
                </Tab>
                <Tab eventKey="M-BCA" title="M-BCA">
                  <ul>
                    <li>Buka aplikasi BCA mobile dan pilih m-BCA.</li>
                    <li>Masukkan Kode Akses Anda.</li>
                    <li>Pilih m-Transfer.</li>
                    <li>Pilih Antar Bank pada Daftar Transfer.</li>
                    <li>Masukkan nomor rekening tujuan.</li>
                    <li>Pilih BCA Digital pada Bank, kemudian klik Send.</li>
                    <li>Kembali ke menu m-Transfer.</li>
                    <li>Pilih Antar Bank pada menu Transfer.</li>
                    <li>Pilih BCA Digital pada kolom Bank.</li>
                    <li>Pilih rekening pada kolom Ke Rekening Tujuan.</li>
                    <li>
                      Masukkan jumlah uang yang akan ditransfer lalu klik OK
                      Pilih Layanan Transfer menggunakan BI FAST atau Realtime
                      Online, klik Send.
                    </li>
                    <li>Klik OK kemudian masukkan PIN m-BCA Anda.</li>
                  </ul>
                </Tab>
                <Tab eventKey="BCA Klik" title="BCA klik">
                  <ul>
                    <li>Buka https://ibank.klikbca.com/ pada browser.</li>
                    <li>
                      Masukan User ID dan PIN KlikBCA Individual, Klik Login.
                    </li>
                    <li> Masukkan nomor rekening BCA.</li>
                    <li>Klik Transfer Dana.</li>
                    <li> Klik Transfer ke Rekening BCA. </li>
                    <li>Pilih nomor rekening dari daftar.</li>
                    <li> Isi nominal transfer BCA.</li>
                    <li>Tunggu 8 digit untuk isi KeyBCA.</li>
                    <li> Aktifkan KeyBCA, Masukkan pin dan tekan angka 2.</li>
                    <li> Masukkan 8 digit.</li>
                    <li>Masukkan 8 digit dari Respon KeyBCA APLLI 2.</li>
                    <li>Klik Lanjutkan, Tunggu informasi rekening tujuan.</li>
                    <li>Nyalakan KeyBCA kembali.</li>
                    <li>Klik angka 1.</li>
                    <li>Tunggu 8 digit di kotak Respon KeyBCA APPLI 1.</li>
                    <li>Pilih Kirim. </li>
                    <li> Tunggu bukti transaksi transfer BCA berhasil.</li>
                  </ul>
                </Tab>
                <Tab eventKey="Internet Bangking" title="Internet Bangking">
                  <ul>
                    <li>Masukkan Kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu "Transaksi Lainnya" - "Transfer" - "ke Rek BCA
                      Virtual Account"
                    </li>
                    <li>
                      Masukkan nomor BCA Virtual Account : 70020+Order ID Contoh
                      : No. Peserta : 12345789, maka ditulis 7002012345789
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti intruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </ul>
                </Tab>
              </Tabs>
            </Card>
          </Col>
          <div className="col-lg-5">{RenderContentUpload()}</div>
        </Row>
      </Container>
    </>
  );
};
export default UploadPembayaran;
