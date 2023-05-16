import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const selectCar = (car) => {
    navigate(`/detail-car/${car.id}`, {
      state: {
        car: car,
      },
    });
  };
  return (
    <Card>
      <Card.Img src={car.image}></Card.Img>
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Title>{car.price}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Card.Text>
        <Button
          variant="success"
          className="w-100"
          onClick={() => {
            selectCar(car);
          }}
        >
          Pilih Mobil
        </Button>
      </Card.Body>
    </Card>
  );
};
