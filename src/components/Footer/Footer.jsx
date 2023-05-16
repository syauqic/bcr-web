export const Footer = () => {
  return (
    <section className="mb-3" id="footer">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div className="fw-bold">
            <div className="mb-2">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </div>
            <div className="mb-2">binarcarrental@gmail.com</div>
            <div className="mb-2">081-233-334-808</div>
          </div>
          <div className="menu">
            <ul>
              <li>Our Services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <div className="fw-bold mb-2">Connect with us</div>
            <div className="d-flex gap-2">
              <span className="icon">FB</span>
              <span className="icon">IG</span>
              <span className="icon">TW</span>
              <span className="icon">EM</span>
              <span className="icon">DS</span>
            </div>
          </div>
          <div>
            <div className="fw-bold mb-2">Copyright Binar 2023</div>
            <div>
              <span className="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
