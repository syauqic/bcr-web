import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Row, Button, Container, Card, ListGroup } from "react-bootstrap";
import Check from "../../../assets/img/check.svg";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router";
import auth from "../../../utils/auth";

const MethodPembayaran = (props) => {
  const { onClickStepper } = props;
  const [show, setShow] = useState(true);
  const [selected, setSelected] = useState();
  const [datapembayaran, setdata] = useState();
  const [day, setDay] = useState({});
  const category = {
    Small: "2 - 4 orang",
    small: "2 - 4 orang",
    Medium: "4 - 6 orang",
    medium: "4 - 6 orang",
    Large: "6 - 8 orang",
    large: "6 - 8 orang",
  };
  const token = auth.getToken();
  const GetData = async () => {
    try {
      const config = {
        headers: {
          access_token: token,
        },
      };
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/order/${props.dataId}`,
        config
      );
      console.log(response.data);
      setdata(response.data);
      setDay(response.data);
    } catch {
      console.log("err");
    }
  };
  const selectClick = (index) => {
    setSelected(index);
  };
  const startDate = moment(day.start_rent_at);
  const endDate = moment(day.finish_rent_at);

  const diffDay = endDate.diff(startDate, "days");
  console.log(diffDay);
  useEffect(() => {
    GetData();
  }, []);

  return datapembayaran && datapembayaran.data !== null ? (
    <Container>
      <Row className="mt-3">
        <div className="col-lg-7">
          <Card className="p-3">
            <p className="fw-bold">Pilih Bank Transfer</p>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <ListGroup variant="flush border-bottom border-top-0 ">
              <ListGroup.Item>
                <div
                  className={selected === 1 ? "active" : null}
                  onClick={() => {
                    selectClick(1);
                    localStorage.setItem("bank", "BCA");
                  }}
                >
                  <div className="mt-3">
                    <button className="bank btn btn-outline-secondary w-25">
                      BCA
                    </button>
                    <span className="ms-3">BCA Transfer</span>

                    {selected === 1 ? (
                      <img
                        src={Check}
                        className="float-check-right mt-2"
                        alt="check-list"
                      />
                    ) : null}
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div
                  className={selected === 2 ? "active" : null}
                  onClick={() => {
                    selectClick(2);
                    localStorage.setItem("bank", "Mandiri");
                  }}
                >
                  <div className="mt-3">
                    <button className="bank btn btn-outline-secondary w-25">
                      Mandiri
                    </button>
                    <span className="ms-3">Mandiri Transfer</span>

                    {selected === 2 ? (
                      <img
                        src={Check}
                        className="float-check-right mt-2"
                        alt="check-list"
                      />
                    ) : null}
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div
                  className={selected === 3 ? "active" : null}
                  onClick={() => {
                    selectClick(3);
                    localStorage.setItem("bank", "BNI");
                  }}
                >
                  <div className="mt-3">
                    <button className="bank btn btn-outline-secondary w-25">
                      BNI
                    </button>
                    <span className="ms-3">BNI Transfer</span>

                    {selected === 3 ? (
                      <img
                        src={Check}
                        className="float-check-right mt-2"
                        alt="check-list"
                      />
                    ) : null}
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col-lg-5">
          <Card className="p-3">
            <Card.Body>
              <p className="fw-bold"> {datapembayaran.Car.name}</p>
              <p className="disable">
                <FiUsers className="mb-1 me-2" />
                {category[datapembayaran.Car.category]}
              </p>
              <div className="total">
                <button
                  onClick={() => setShow(!show)}
                  className="btn-show"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <p>Total</p>{" "}
                  {show ? (
                    <FaAngleUp className="mt-1 ms-2" />
                  ) : (
                    <FaAngleDown className="mt-1 ms-2" />
                  )}
                </button>
                <p className="fw-bold">
                  Rp. {datapembayaran.Car.price * diffDay}
                </p>
              </div>
              <div className="collapse" id="collapseExample">
                <h6 className="fw-bold ">Harga</h6>
                <div className="total1 text-indent">
                  <li>
                    Sewa Mobil Rp.{datapembayaran.Car.price} x {diffDay} Hari
                  </li>
                  <span>Rp. {datapembayaran.Car.price * diffDay}</span>
                </div>
                <h6 className="fw-bold mt-4 ">Biaya Lainnya</h6>
                <div className="total1 text-indent">
                  <li>Pajak</li>
                  <span className="text-success">Termasuk</span>
                </div>
                <div className="total1 text-indent">
                  <li>Biaya makan sopir</li>
                  <span className="text-success">Termasuk</span>
                </div>
                <h6 className="fw-bold mt-4 ">Belum Termasuk</h6>
                <div className="text-indent">
                  <li>Bensin</li>
                  <li>Tol dan parkir</li>
                </div>
                <div className="total">
                  <p>Total</p>
                  <p className="fw-bold">
                    {" "}
                    Rp. {datapembayaran.Car.price * diffDay}
                  </p>
                </div>
              </div>
            </Card.Body>
            {selected ? (
              <Button
                className="w-100 btn-success"
                type="submit"
                onClick={() => onClickStepper(1)}
              >
                Bayar
              </Button>
            ) : (
              <Button className="w-100 btn-success" type="submit" disabled>
                Bayar
              </Button>
            )}
          </Card>
        </div>
      </Row>
    </Container>
  ) : (
    <></>
  );
};

export default MethodPembayaran;
