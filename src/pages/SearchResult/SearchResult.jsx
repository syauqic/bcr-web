import { Row, Col, Container } from "react-bootstrap";
import { Navigation } from "../../components/Navigation";
import { useSearchParams } from "react-router-dom";
import { Backdrop, SearchForm } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { CarCard } from "./CarCard";
import { Footer } from "../../components/Footer";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);

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
  useEffect(() => {
    // console.log("use effect trigger");
    fetchData();
  }, [searchParams]);
  // console.log("render");

  return (
    <div>
      <Backdrop triggerClass="search-input" />
      {/* <Hero withHeroContent={false} /> */}
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }}>
        <Navigation />
      </Container>
      <SearchForm
        nameValue={searchParams.get("name")}
        categoryValue={searchParams.get("category")}
        statusValue={searchParams.get("isRented")}
        // priceValue={searchParams.get("price")}
        minPriceValue={
          searchParams.get("minPrice") && parseInt(searchParams.get("minPrice"))
        }
        maxPriceValue={
          searchParams.get("maxPrice") && parseInt(searchParams.get("maxPrice"))
        }
        buttonType="edit"
        cardTitle="Pencarianmu"
      />
      <Container className="mt-5 mb-3">
        <Row lg={3} sm={1} md={2} className="">
          {cars.map((car) => {
            return (
              <Col key={car.id}>
                <CarCard
                  car={car}
                  minPrice={
                    searchParams.get("minPrice") &&
                    parseInt(searchParams.get("minPrice"))
                  }
                  maxPrice={
                    searchParams.get("maxPrice") &&
                    parseInt(searchParams.get("maxPrice"))
                  }
                  name={searchParams.get("name")}
                  category={searchParams.get("category")}
                  status={searchParams.get("isRented")}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchResult;
