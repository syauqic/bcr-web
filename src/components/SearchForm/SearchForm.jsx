import { useState } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

export const SearchForm = ({
  cardTitle = "",
  nameValue = "",
  categoryValue = "",
  minPriceValue = 0,
  maxPriceValue = 0,
  statusValue = "",
  buttonType = "",
  isDisabled = false,
}) => {
  const [name, setName] = useState(nameValue);
  const [category, setCategory] = useState("");
  // Ini case untuk ada harga min dan max nya
  const [minPrice, setMinPrice] = useState(minPriceValue);
  const [maxPrice, setMaxPrice] = useState(maxPriceValue);
  // const [rangePrice, setRangePrice] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const fetchCar = (name, category, minPrice, maxPrice, status) => {
    const intMin = parseInt(minPrice);
    const intMax = parseInt(maxPrice);
    console.log(intMin >= intMax);
    console.log(typeof minPrice, typeof maxPrice);
    if ((intMin || intMax) && intMin >= intMax) {
      alert("Harga minimum tidak boleh lebih besar dari harga maksimum");
      return;
    }
    try {
      navigate(
        `/search-result?name=${name}&category=${category}&minPrice=${
          minPrice ? minPrice : ""
        }&maxPrice=${maxPrice ? maxPrice : ""}&isRented=${status}`
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
    <Container className="container-search-form py-3 position-relative mb-5 search-form">
      <Card
        className=" w-100 p-3 my-5 position-absolute start-50 translate-middle-x "
        style={{ top: "-120px", zIndex: "2" }}
      >
        <Card.Title>{cardTitle}</Card.Title>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Row className="align-items-end">
            <Col>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={nameValue}
                  value={name}
                  disabled={isDisabled}
                  placeholder={`${isDisabled ? `${nameValue}` : "Ketik nama / tipe mobil"}`}
                  className="search-input"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select
                  defaultValue={categoryValue}
                  className="search-input"
                  disabled={isDisabled}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">
                    {`${isDisabled ? `${categoryValue}` : "Pilih kategori"}`}
                  </option>
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="number"
                    defaultValue={minPriceValue}
                    value={minPrice}
                    disabled={isDisabled}
                    placeholder={`${isDisabled ? "" : "Minimum"}`}
                    className="search-input me-lg-2"
                    onChange={(e) => setMinPrice(e.target.value)}
                  ></Form.Control>
                  -
                  <Form.Control
                    type="number"
                    defaultValue={maxPriceValue}
                    value={maxPrice}
                    disabled={isDisabled}
                    placeholder={`${isDisabled ? "" : "Maximum"}`}
                    className="search-input ms-lg-2"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  ></Form.Control>
                </div>

                {/* Ini form desain awal */}
                {/* <Form.Select
                  defaultValue={priceValue}
                  className="search-input"
                  disabled={isDisabled}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">{`${
                    isDisabled ? "" : "Pilih harga"
                  }`}</option>
                  {PRICE.map((item) => {
                    return (
                      <option key={item.id} id={item.id} value={item.value}>
                        {item.value}
                      </option>
                    );
                  })}
                </Form.Select> */}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  defaultValue={statusValue}
                  className="search-input"
                  onChange={(e) => setStatus(e.target.value)}
                  disabled={isDisabled}
                >
                  <option value="">{`${
                    isDisabled ? `${statusValue}` : "Pilih status"
                  }`}</option>
                  <option value={true}>Disewa</option>
                  <option value={false}>Tersedia</option>
                </Form.Select>
              </Form.Group>
            </Col>
            {!isDisabled && (
              <Col lg={2} sm={12}>
                {buttonType === "edit" ? (
                  <CustomButton
                    text="Edit"
                    variant="edit"
                    type="submit"
                    buttonSearch={true}
                  />
                ) : <withSerchButton /> ? (
                  <CustomButton
                    text="Cari Mobil"
                    type="submit"
                    buttonSearch={true}
                  />
                ) : (
                  <></>
                )}
              </Col>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
