/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Navigation } from "../../components/Navigation";
import { useLocation } from "react-router-dom";
import { SearchForm } from "../../components";
import { Footer } from "../../components/Footer";
import Auth from "../../components/auth/index";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CATEGORY = {
  small: "2 - 4 orang",
  medium: "4 - 6 orang",
  large: "6 - 8 orang",
};

// eslint-disable-next-line react-hooks/rules-of-hooks

const DetailCar = () => {
  const location = useLocation();
  const { car, minPrice, maxPrice, name, category, status } = location.state;
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0, // -> belakang koma
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [dateStart, dateEnd] = dateRange;
  const totaldate = dateStart - dateRange;
  console.log(totaldate);

  return (
    <Auth>
      <div>
        <Container fluid style={{ height: "30vh", background: "#F1F3FF" }}>
          <Navigation />
        </Container>
        <SearchForm
          isDisabled={true}
          cardTitle="Pencarianmu"
          nameValue={name}
          categoryValue={category}
          statusValue={status}
          minPriceValue={minPrice}
          maxPriceValue={maxPrice}
        />
        <Container className="mt-5 mb-3">
          <Row>
            <Col className="col-8">
              <Card>
                <Card.Body>
                  <Card.Title>Tentang Paket</Card.Title>
                  <Card.Title>Include</Card.Title>
                  <Card.Text style={{ color: "#8A8A8A" }}>
                    <ul>
                      <li>
                        Apa saja yang termasuk dalam paket misal durasi max 12
                        jam
                      </li>
                      <li>
                        Sudah termasuk bensin selama 12 jam Sudah termasuk Tiket
                      </li>
                      <li>Wisata Sudah termasuk pajak</li>
                    </ul>
                  </Card.Text>
                  <Card.Title>Exclude</Card.Title>
                  <Card.Text style={{ color: "#8A8A8A" }}>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Card.Text>
                  <Card.Title>Refund, Reschedule, Overtime</Card.Title>
                  <Card.Text style={{ color: "#8A8A8A" }}>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-4">
              <Card>
                <Card.Img className="p-3" src={car.image}></Card.Img>
                <Card.Body>
                  {/* <Card.Title>{car.name}</Card.Title>
                  <Card.Title style={{ color: "#8A8A8A", fontSize: "15px" }}>

                    {CATEGORY[car.category]}
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="">Total</Card.Title>
                    <Card.Title className="">
                      {formatter.format(car.price)}
                    </Card.Title>
                  </div> */}
                  <Container>
                    <Row className="mb-3">{car.name}</Row>

                    <Row className="mb-3">{CATEGORY[car.category]}</Row>
                    <Row className="mb-3">
                      Tentukan lama sewa mobil (max. 7 hari)
                    </Row>
                    <Row className="mb-3">
                      <Datepicker
                        dateFormat="dd-MMMM-yyyy"
                        showIcon="true"
                        id="dateStartEnd"
                        className="datePicker"
                        // eslint-disable-next-line react/jsx-boolean-value
                        selectsRange={true}
                        startDate={dateStart}
                        endDate={dateEnd}
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        minDate={dateStart ? new Date(dateStart) : new Date()}
                        maxDate={
                          dateStart
                            ? new Date(
                                new Date(dateStart).setDate(
                                  new Date(dateStart).getDate() + 6
                                )
                              )
                            : null
                        }
                        showDisabledMonthNavigation
                        isClearable
                        placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                      />
                    </Row>
                    <Row className="mb-3">
                      <Col className="g-0 mb-3">Total</Col>
                      <Col className="g-0 fw-bold text-end mb-3">
                        {formatter.format(car.price)}
                      </Col>
                    </Row>
                    <Row>
                      <Button className="ButtonToPayment" variant="success">
                        Lanjutkan ke Pembayaran
                      </Button>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Auth>
  );
};

export default DetailCar;
