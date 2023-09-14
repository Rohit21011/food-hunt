import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "../../shared-components/Image";
import Textbox from "../../shared-components/Textbox";
import { Link } from "react-router-dom";
import { ButtonToolbar, Popover, OverlayTrigger } from "react-bootstrap";
import Icon from "../../shared-components/Icons";

function OffcanvasExample() {
  const popoverBottom = (
  
 <Popover id="popover-positioned-bottom"  title="Popover bottom">
      <Link to="/sign-in" >
        Sign in
      </Link>
      <br />
      new user? <Link to="/new-account">create new account</Link>
    </Popover>
   
   
  );
  return (
    <>
      <Navbar expand="lg" fixed="top" className="p-2  bg-white ">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image
              width="220px"
              height="auto"
              className="ml-5"
              src={require("../../../assets/images/logo.png")}
            />
          </Navbar.Brand>
          <Textbox
            type="search"
            className="form-control border-0  search-box"
            placeholder="search products..."
          />
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Image
                  width="220px"
                  height="auto"
                  src={require("../../../assets/images/logo.png")}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 custom-active navbar-nav ml-auto mr-5">
                <Link to="/" className="nav-link nav-links ">
                  Home
                </Link>
                <Link to="/menu" className="nav-link nav-links ">
                  Menu
                </Link>
                <Link to="/shop" className="nav-link nav-links ">
                  Shop
                </Link>
                <Link to="/about" className="nav-link nav-links ">
                  About
                </Link>
                <Link to="/contact" className="nav-link nav-links ">
                  Contact
                </Link>
                <ul className="d-flex nav-col ">
                  <li className="nav-item ml-3 ml-lg-0">
                    <ButtonToolbar>
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={popoverBottom}
                      >
                        <Link to="#" className="nav-link login">
                          <i class="fas fa-user "></i>
                        </Link>
                      </OverlayTrigger>
                    </ButtonToolbar>

                    <span className="d-lg-none d-block nav-links">Login</span>
                  </li>

                  <li className="nav-item ml-3 ml-lg-0">
                    <Link to="/wishlist" className="nav-link login">
                      <Icon className="fas fa-heart " />
                    </Link>

                    <span className="d-lg-none d-block nav-links">
                      Wishlist
                    </span>
                  </li>
                  <li className="nav-item ml-3 ml-lg-0">
                    <Link to="/cart"  className="nav-link login sticky-basket">
                      <Icon className="fas fa-shopping-basket   " />
                      <span className="d-lg-none d-block nav-links">
                        My cart
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav>
            
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
