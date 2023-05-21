import { Button } from "react-bootstrap";

export const Testimonial = () => {
  return (
    <section className="mb-4" id="testimonial">
      <div className="container">
        <div className="text-center">
          <h1>Testimonial</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            eius dignissimos similique nostrum animi laudantium ex saepe autem,
            laboriosam excepturi?
          </p>
        </div>
        <div
          className="carousel slide"
          id="carouselExampleRide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="card p-5" id="card-testimonial">
                    <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
                      <div className="col-lg-4 text-center">
                        <img src="./assets/img/img_photo.png" />
                      </div>
                      <div className="col-lg-8 pb-2">
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <div className="pb-2 pt-2 fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </div>
                        <div>John Dee 32, Bromo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row ">
                <div className="col-sm-12 ">
                  <div className="card p-5" id="card-testimonial">
                    <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
                      <div className="col-lg-4 text-center">
                        <img src="./assets/img/img_photo (1).png" />
                      </div>
                      <div className="col-lg-8 pb-2">
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <div className="pb-2 pt-2 fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </div>
                        <div>John Dee 32, Bromo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row ">
                <div className="col-sm-12 ">
                  <div className="card p-5" id="card-testimonial">
                    <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
                      <div className="col-lg-4 text-center">
                        <img src="./assets/img/img_photo.png" />
                      </div>
                      <div className="col-lg-8 pb-2">
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <img src="./assets/img/Star 1.png" />
                        <div className="pb-2 pt-2 fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </div>
                        <div>John Dee 32, Bromo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <Button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
              variant="none"
            >
              <img
                src="./assets/img/left (1).png"
                style={{ width: "32px", height: "32px" }}
              />
            </Button>
            <Button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
              variant="none"
            >
              <img
                src="./assets/img/arrow-right.png"
                style={{ width: "32px", height: "32px" }}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
