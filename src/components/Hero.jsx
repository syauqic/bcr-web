import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { Navigation } from "./Navigation";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const Hero = () => {

  const { user } = useSelector((state) => state.login);
  return (
    <section
      className="mb-5"
      id="hero"
      style={{ position: "relative", zIndex: "0" }}
    >
      <Navigation />
      <div className="container hero-content mt-3">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6">
            <div className="row">
              <div className="col-lg-11 hero-text fw-bold">
                <h1 className="fw-bold">
                  Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {window.location.pathname === "/" && user && user.email ? (
                  <Link to="/search">
                    <CustomButton text="Mulai Sewa Mobil" />
                  </Link>
                ) : (
                  <Button type="button" variant="secondary" disable>
                    Mulai Sewa Mobil
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="hero-image">
              <img
                src="./assets/img/img_car.png"
                className="img-fluid object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
