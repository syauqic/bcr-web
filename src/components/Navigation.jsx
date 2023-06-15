import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { Button } from "react-bootstrap";

export const Navigation = () => {

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
}

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ zIndex: "3", backgroundColor: "rgba(0,0,0,0)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="">
            <Link to="/">
              <span className="logo" />
            </Link>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#000000" }}
                  aria-current="page"
                  href="/#feature"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#why-us"
                  style={{ color: "#000000" }}
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#testimonial"
                  style={{ color: "#000000" }}
                >
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#faq"
                  style={{ color: "#000000" }}
                >
                  FAQ
                </a>
              </li>
              {
               user && user.email ? (
                <Button type="button" variant="danger" 
                onClick={() => handleLogout()}
                >
                  Logout
                </Button>
               ) : (
                <>
                  <Button type="button" variant="success" 
                  className="ms-3 me-3"
                  onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button type="button" variant="outline-success" 
                  onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </>
                
               )
              }
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            BCR
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h5 className="pb-2">Our Services</h5>
          <h5 className="pb-2">Why Us</h5>
          <h5 className="pb-2">Testimonial</h5>
          <h5 className="pb-2">FAQ</h5>
          <div className="d-flex align-items-center">
              {
               user && user.email ? (
                <Button type="button" variant="danger" 
                
                onClick={() => handleLogout()}
                >
                  Logout
                </Button>
               ) : (
                <>
                  <Button type="button" variant="success" 
                  className="d-flex me-2 justify-content-center"
                  onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button type="button" variant="outline-success" 
                   className="d-flex me-3 justify-content-center"
                  onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </>
                
               )
              }
        </div>
        </div>
      </div>
    </>
  );
};
