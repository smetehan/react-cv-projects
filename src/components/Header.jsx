import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <div className="baslik">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="header-home">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <style jsx>{`
        .baslik {
          font-size: 18px;
          font-weight: 500;
        }
        .header-home {
          width: calc(100% - 300px);
        }
      `}</style>
    </>
  );
};

export default Header;
