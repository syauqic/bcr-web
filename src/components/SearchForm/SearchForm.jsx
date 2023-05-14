import { useState, useEffect } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const SearchForm = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();
  const [filteredCar, setFilteredCar] = useState([]);

  // const searchCar = (name, category, price, status) => {
  //   return new Promise((resolve, reject) => {
  //     const filteredCar = CARS.filter((car) => {
  //       return car.name.toLowerCase().includes(name.toLowerCase());
  //       // car.status.toString() == status
  //     });
  //     console.log("name", name);
  //     console.log("category", category);
  //     console.log("status", status);
  //     console.log("tipe status", typeof status);
  //     if (filteredCar) {
  //       resolve(filteredCar);
  //     } else reject(new Error("Car not found"));
  //   });
  // };

  const fetchCar = async (name, category, price, status) => {
    const minPrice = price.includes(">") ? price.split(">")[0] : "";
    const maxPrice = price.includes("<") ? price.split("<")[1] : "";
    console.log("minPrice", minPrice);
    console.log("maxPrice", maxPrice);
    try {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}&isRented=${status}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      console.log("data", data);
      setFilteredCar(data.cars);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderBackNavigation = () => (
    <div>
      <Link to="/">
        <Button type="button" variant="light">
          Back
        </Button>
      </Link>
    </div>
  );

  const RenderFilteredCar = () => {
    return filteredCar.length > 0 ? (
      filteredCar.map((car) => {
        return (
          <div key={car.id}>
            <h2>Hasil Pencarian</h2>
            <div>Nama Mobil : {car.name}</div>
            <div>Kategori : {car.category}</div>
            <div>Harga : {car.price}</div>
            <div>Status : {car.status.toString()}</div>
          </div>
        );
      })
    ) : (
      <div>Car not found</div>
    );
  };

  const RenderFormData = () => (
    <div>
      <h2>Form Data</h2>
      <div>Nama Mobil : {name}</div>
      <div>Kategori : {category}</div>
      <div>Harga : {price}</div>
      <div>
        Status : {status} {typeof status}
      </div>
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", {
      name,
      category,
      price,
      status,
    });
    // searchCar(name, category, status)
    //   .then((res) => {
    //     console.log(res);
    //     setFilteredCar(res);
    //   })
    //   .catch((err) => console.log(err));
    fetchCar(name, category, price, status);
  };

  console.log("filteredCar", filteredCar);
  return (
    <Container className="py-3">
      {renderBackNavigation()}
      <Card className="p-3 my-5">
        <Form onSubmit={(e) => onSubmit(e)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ketik nama / tipe mobil"
                  className="search-input"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
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
            <Col>
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <Form.Select
                  className="search-input"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Pilih Harga</option>
                  <option value="<400000">{"< Rp. 400.000"}</option>
                  <option value=">400000<600000">
                    {"Rp.400.000 - Rp. 600.000"}
                  </option>
                  <option value=">600000">{"> Rp. 600.000"}</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  className="search-input"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Pilih Status</option>
                  <option value={true}>Disewa</option>
                  <option value={false}>Tersedia</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="d-flex justify-conten-start align-items-end"
                style={{
                  height: "100%",
                }}
              >
                <Button type="submit" variant="success">
                  Cari Mobil
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
      <RenderFormData />
      <RenderFilteredCar />
    </Container>
  );
};
