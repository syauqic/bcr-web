import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Hero = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section
      className="mb-3"
      id="hero"
      style={{ position: "relative", zIndex: "0" }}
    >
      <Navigation />
        <div className="container hero-content mt-3">
          <div className="row g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-lg-10 hero-text">
                  <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  {window.location.pathname === "/" && (
                    <Link to="/search">
                      <CustomButton text="Mulai Sewa Mobil" />
                    </Link>
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
