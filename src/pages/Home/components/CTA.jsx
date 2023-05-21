import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="mb-4" id="cta">
      <div className="container">
        <div className="card" style={{ height: "25rem" }}>
          <div
            className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
            style={{ height: "100%" }}
          >
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              veritatis?
            </p>
            <div>
              <Link to="/search">
                <button type="button" className="btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
