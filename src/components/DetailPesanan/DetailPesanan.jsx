import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import auth from "../../utils/auth";
const DetailPesanan = () => {
  const { id } = useParams();
  const [dataMobil, setdata] = useState();
  const token = auth.getToken();
  const category = {
    small: "2 - 4 orang",
    medium: "4 - 6 orang",
    large: "6 - 8 orang",
  };
  const GetData = async () => {
    try {
      const config = {
        headers: {
          access_token: token,
        },
      };
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/order/${id}`,
        config
      );

      console.log(response.data);
      setdata(response.data);
    } catch {
      console.log("err");
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return dataMobil && dataMobil.CarId !== null ? (
    <>
      <Container>
        <Card className="detail-box">
          <Row>
            <p className="fw-bold">Detail Pesananmu</p>
            <Col>
              <label>Nama Mobil</label>
              <p className="disable">{dataMobil.Car.name}</p>
            </Col>
            <Col>
              <label>Kategori</label>
              <p className="disable">{category[dataMobil.Car.category]}</p>
            </Col>
            <Col>
              <label>Tanggal Mulai Sewa</label>
              <p className="disable">
                {moment(dataMobil.start_rent_at).format("DD-MMMM-YYYY")}
              </p>
            </Col>
            <Col>
              <label>Tanggal Akhir Sewa</label>
              <p className="disable">
                {moment(dataMobil.finish_rent_at).format("DD-MMMM-YYYY")}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
      ;
    </>
  ) : (
    <>Gk ada data </>
  );
};

export default DetailPesanan;
