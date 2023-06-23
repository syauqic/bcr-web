/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { Navigation } from "../../components/Navigation";
import { useLocation, useNavigate,useParams} from "react-router-dom";
import { SearchForm } from "../../components";
import { Footer } from "../../components/Footer";
import Auth from "../../components/auth/index";
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment/moment";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarDetail , createOrder } from "../../Redux/DetailCar/slice"

const DetailCar2 = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const { minPrice, maxPrice, name, category, status } = location.state;
  const [dateRange, setDateRange] = useState([null, null]);
  const [dateStart, dateEnd] = dateRange;
  const [rentDay, setRentDay] = useState("");
  const tanggalSewa = new Date(dateEnd) - new Date(dateStart);
  const jumlahHariSewa = ( tanggalSewa / (1000 * 3600 * 24) ) + 1
    
  const [detailCar, SetDetailCar] = useState({});
  const {id} = useParams();
  // const fetch = useRef(true);

  const dispatch  = useDispatch()
  
  const fetchGetCar = async () => {
    try {
      const response = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`,
      {
        headers: {
        access_token: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
        }
      }
      );
      console.log('ini response', response);
      SetDetailCar(response.data)
    }catch(error) {
      console.log('error', error)

    }
  }
  useEffect(() => {
      fetchGetCar(id);
  }, [id]);
 


  const createNewOrder = async () => {

    const config = {
        headers:{
            access_token: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc" 
        }
    }
    const body = {
      start_rent_at: moment(dateStart).format('YYYY-MM-DD'),
      finish_rent_at: moment (dateEnd).format('YYYY-MM-DD'),
      car_id: id
    } 
    const {data} =  await axios.post("https://bootcamp-rent-cars.herokuapp.com/customer/order", body, config);
    localStorage.setItem("detailCar",JSON.stringify(data));
      navigate('/pembayaran') ;
   
      
  }

  useEffect(() => {
    let day = 0;

    if (dateStart && dateEnd) {
      day = moment(dateEnd).diff(moment(dateStart), "days") + 1;
      setRentDay(day);
    } else {
      setRentDay(0);
    }
  }, [dateStart, dateEnd]);

  const handleSubmit = (e) => 
  {
    e.preventDefault()
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0, // -> belakang koma
  });

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
                <Card.Img className="p-3" 
                src={detailCar.image}
                ></Card.Img>
                <Card.Body>
                  
                  <Card.Title>{detailCar.name}</Card.Title>
                  <Card.Title style={{ color: "#8A8A8A", fontSize: "15px" }}>
                  <div>
                    {(() => {
                      switch (detailCar.category) {
                        case "small":
                          return "2-4 orang";
                        case "medium":
                          return "4-6 orang";
                        case "large":
                          return "6-8 orang";
                        default:
                          return "-";
                      }
                    })()}
                  </div>
                  </Card.Title>
                
                  <Container>
                  <Row className="mb-3">
                     Tentukan lama sewa mobil (max. 7 hari)
                  </Row>
                  <Row className="mb-3">
              
                      <Datepicker
                        dateFormat = "dd-MMMM-yyyy"
                        showIcon
                        id="dateStartEnd"
                        className ="datePicker"
                        // eslint-disable-next-line react/jsx-boolean-value
                        selectsRange= {true}
                        startDate={dateStart}
                        endDate={dateEnd}
                        onChange={(update) => {
                            setDateRange(update);
                          }}
                        minDate={dateStart ? new Date(dateStart) : new Date()}
                        maxDate={dateStart
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
                    <Col className="g-0 mb-3">
                      Total
                    </Col>
                    <Col className="g-0 fw-bold text-end mb-3" >
                    {formatter.format(detailCar.price)}
                    </Col>
                  </Row>
                  <Row>
                    <Button className="ButtonToPayment" 
                            variant="success" 
                            onClick={createNewOrder}
                            disabled={!rentDay}
                            onSubmit={handleSubmit}
                            >
                            
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

export default DetailCar2;