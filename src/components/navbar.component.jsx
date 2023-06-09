import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Container className="position-relative">
      <Navbar
        //   bg="light"
        expand="lg"
        className="d-flex justify-content-between position-absolute w-100 px-5 py-4"
        style={{ background: "white", zIndex: "1" }}
      >
        <Navbar.Brand>Halo</Navbar.Brand>
        <div className="d-flex">
          <Nav.Link className="ms-5">Halo</Nav.Link>
          <Nav.Link className="ms-5">Halo</Nav.Link>
          <Nav.Link className="ms-5">Halo</Nav.Link>
          <Nav.Link className="ms-5">Halo</Nav.Link>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
