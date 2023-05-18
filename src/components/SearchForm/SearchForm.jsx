import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import CustomButton from "../CustomButton";

const PRICE = [
  {
    id: 0,
    title: "< Rp 400.000",
    minPrice: 0,
    maxPrice: 400000,
  },
  {
    id: 1,
    title: "Rp 400.000 - Rp 600.000",
    minPrice: 400000,
    maxPrice: 600000,
  },
  {
    id: 2,
    title: "> Rp 600.000",
    minPrice: 600000,
    maxPrice: "",
  },
];

export const SearchForm = ({
  nameValue = "",
  categoryValue = "",
  priceValue = "",
  statusValue = "",
  buttonType = "",
}) => {
  const [name, setName] = useState(nameValue);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const setPrice = (value) => {
    // console.log(value);
    if (value) {
      setMinPrice(PRICE[value].minPrice);
      setMaxPrice(PRICE[value].maxPrice);
    } else {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  const fetchCar = (name, category, minPrice, maxPrice, status) => {
    try {
      navigate(
        `/search-result?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${status}`
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    fetchCar(name, category, minPrice, maxPrice, status);
  };

  return (
    <Container className="py-3 position-relative mb-5">
      <Card
        className="w-100 p-3 my-5 position-absolute start-50 translate-middle-x "
        style={{ top: "-120px", zIndex: "2" }}
      >
        <Form onSubmit={(e) => onSubmit(e)}>
          <Row className="align-items-end">
            <Col className="col-2">
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={nameValue}
                  value={name}
                  placeholder="Ketik nama / tipe mobil"
                  className="search-input"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  defaultValue={categoryValue}
                  className="search-input"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  defaultValue={priceValue}
                  className="search-input"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Pilih Harga</option>
                  {PRICE.map((item) => {
                    return (
                      <option key={item.id} id={item.id} value={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  defaultValue={statusValue}
                  className="search-input"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Pilih Status</option>
                  <option value={true}>Disewa</option>
                  <option value={false}>Tersedia</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="col-2">
              {buttonType === "edit" ? (
                <CustomButton text="Edit" variant="edit" type="submit" />
              ) : (
                <CustomButton text="Cari Mobil" type="submit" />
              )}
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
