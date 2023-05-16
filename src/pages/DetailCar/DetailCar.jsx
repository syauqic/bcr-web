import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Navigation } from "../../components/Hero/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchForm } from "../../components";

const DetailCar = () => {
  const location = useLocation();
  const { car } = location.state;
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    <div>
      <Navigation />
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }} />
      <SearchForm />
      <Container className="mt-5">
        <Row>
          <Col className="col-8">
            <Card>
              <Card.Body>
                <Card.Title>Tentang Paket</Card.Title>
                <Card.Text style={{ color: "#8A8A8A" }}>p</Card.Text>
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
    </div>
  );
};

export default DetailCar;
