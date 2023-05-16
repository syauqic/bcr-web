import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Navigation } from "../../components/Hero/Navigation";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Backdrop, SearchForm } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { CarCard } from "./CarCard";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`,
        {
          params: {
            name: searchParams.get("name"),
            category: searchParams.get("category"),
            minPrice: searchParams.get("minPrice"),
            maxPrice: searchParams.get("maxPrice"),
            isRented: searchParams.get("isRented"),
          },
        }
      );
      setCars(data.cars);
    };
    fetchData();
  }, [cars]);

  return (
    <div>
      <Backdrop triggerClass="search-input" />
      <Navigation />
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }} />
      <SearchForm
        nameValue={searchParams.get("name")}
        categoryValue={searchParams.get("category")}
        statusValue={searchParams.get("isRented")}
        buttonType="edit"
      />
      <Container className="mt-5">
        <Row lg={3}>
          {cars.map((car) => {
            return (
              <Col key={car.id}>
                <CarCard car={car} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SearchResult;
