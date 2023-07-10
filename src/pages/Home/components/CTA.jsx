import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CTA = () => {

const { user } = useSelector((state) => state.login)

  return (
    <section className="mb-5" id="cta">
      <div className="container">
        <div className="card" style={{ height: "25rem" }}>
          <div
            className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
            style={{ height: "100%" }}
          >
            <h2 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </p>
            <div>
              {
                user && user.email ? (
                  <Link to="/search">
                <button type="button" className="btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </Link>
                ) : (
                  <Button type="button" variant="secondary" disable>
                   Mulai Sewa Mobil 
                  </Button>
                )
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
