export const WhyUs = () => {
  return (
    <section className="mb-5" id="why-us">
      <div className="container">
        <div className="text-center text-lg-start fw-bold">
          <h2 className="fw-bold">Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental</p>
        </div>
        <div className="row g-3 fw-bold">
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <img src="./assets/img/icon_complete.png" />
              </div>
              <div>
                <span className="d-block mb-2">Mobil Lengkap</span>
                <span className="d-block mb-2">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <img src="./assets/img/icon_price.png" />
              </div>
              <div>
                <span className="d-block mb-2">Harga Murah</span>
                <span className="d-block mb-2">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <img src="./assets/img/icon_24hrs.png" />
              </div>
              <div>
                <span className="d-block mb-2">Layanan 24 Jam</span>
                <span className="d-block mb-2">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami 
                  juga tersedia di akhir minggu
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3">
            <div className="card p-3">
              <div className="mb-2">
                <img src="./assets/img/icon_professional.png" />
              </div>
              <div>
                <span className="d-block mb-2">Sopir Profesional</span>
                <span className="d-block mb-2">
                  Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
