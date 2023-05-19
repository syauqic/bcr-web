import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Navigation } from "../../components/Hero/Navigation";
import { useLocation } from "react-router-dom";
import { SearchForm } from "../../components";
import { Footer } from "../../components/Footer/Footer";

const DetailCar = () => {
  const location = useLocation();
  const { car } = location.state;
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0, // -> belakang koma
  });
  return (
    <div>
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }}>
        <Navigation />
      </Container>
      <SearchForm isDisabled={true} />
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
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
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
              <Card.Img src={car.image}></Card.Img>
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Title>{car.category}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="">Total</Card.Title>
                  <Card.Title className="">
                    {formatter.format(car.price)}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailCar;
