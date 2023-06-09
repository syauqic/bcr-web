/* eslint-disable jsx-a11y/alt-text */
const ListItem = ({ title }) => {
  return (
    <li
      style={{ listStyle: "none", marginBottom: "10px" }}
      className="d-flex align-items-center"
    >
      <img src="./assets/img/img_check.png" />{" "}
      <span className="ms-2">{title}</span>
    </li>
  );
};

export const Feature = () => {
  return (
    <section className="mb-5" id="feature">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="p-5 p-lg-0">
              <img
                className="img-fluid object-fit-cover"
                src="./assets/img/img_service.png"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 fw-bold">
            <h2 className="fw-bold">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="row">
              <ul>
                <ListItem
                  title="Sewa Mobil Dengan Supir
                di Bali 12 Jam"
                />
                <ListItem
                  title="Sewa Mobil Lepas Kunci
                di Bali 24 Jam"
                />
                <ListItem
                  title="Sewa Mobil Jangka
                Panjang Bulanan"
                />
                <ListItem
                  title="Gratis Antar-jemput
                Mobil di Bandara"
                />
                <ListItem
                  title="Layanan Airport
                Transfer / Drop In Out"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
