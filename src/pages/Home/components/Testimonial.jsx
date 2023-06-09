/* eslint-disable jsx-a11y/alt-text */
import { Button } from "react-bootstrap";

const TestimonialCard = ({ img, description, rating, isActive = false }) => {
  const Rating = [...Array(rating)].map((_, i) => (
    <img src="./assets/img/Star 1.png" />
  ));
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <div className="row ">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="card-testimonial card p-5" style={{ width: "70%" }}>
            <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
              <div className="col-lg-4  text-center">
                <img src={img} />
              </div>
              <div className="col-lg-8 col-sm-12 pb-2">
                {Rating.map((item) => item)}

                <div className="pb-2 pt-2 fw-bold">{description}</div>
                <div>John Dee 32, Bromo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <section className="mb-4" id="testimonial">
      <div className="container">
        <div className="text-center fw-bold">
          <h2 className="fw-bold">Testimonial</h2>
          <p>Berbagai macam review positif dari para pelanggan kami</p>
        </div>
        <div
          className="carousel slide"
          id="carouselExampleRide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <TestimonialCard
              isActive={true}
              img="./assets/img/img_photo.png"
              rating={3}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
            <TestimonialCard
              img="./assets/img/img_photo (1).png"
              rating={2}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
            <TestimonialCard
              img="./assets/img/img_photo.png"
              rating={5}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
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
