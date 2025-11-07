// import Container from "react-bootstrap/Container";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "@/public/images/logo.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MagnetButton from "../MagnetButton";
import { Dropdown, Form } from "react-bootstrap";
import ThemeSwitcher from "../ThemeToggle/Button";
import Link from "next/link";
import BottomForm from "../ContactForm/BottomForm";
import { useModalContext } from "@/context/ModalContext";


function Header() {
  const [scroll, setScroll] = useState(false);
  const [scroll2, setScroll2] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
      setScroll2(window.scrollY > 400);
    });
  }, []);

  // active class
  //assigning location variable
  const location = useRouter();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  // Sidebar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const showDropdown = () => {
    setShow(true);
  };
  const hideDropdown = () => {
    setShow(false);
  };

  const { modalShow, setModalShow } = useModalContext();

  return (
    <>
      <Navbar
        fixed="top"
        className={`${scroll ? "scrolled" : ""} ${scroll2 ? "scrolled-show" : ""
          }`}
      >
        <Container>
          <Navbar.Brand href={"/"}>
            <Image src={Logo} alt="logo" className="logo" />
          </Navbar.Brand>

          <Offcanvas
            show={show}
            onHide={handleClose}
            scroll={true}
            backdrop={true}
            responsive={"lg"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Navbar.Brand href={"/"}>
                  <Image src={Logo} alt="logo" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link
                  href={"/about-us"}
                  className={splitLocation[1] === "about-us" ? "active" : ""}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href={"/solutions"}
                  className={splitLocation[1] === "solutions" ? "active" : ""}
                >
                  Solutions
                </Nav.Link>
                {/* <Dropdown
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  show={show}>
                  <Dropdown.Toggle
                    href="/services"
                    id="dropdown-basic"
                    className={splitLocation[1] === "services" ? "active" : ""}
                  >
                    Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/services/custom-app-development">Custom App Development</Dropdown.Item>
                    <Dropdown.Item href="/services/digital-marketing">Digital Marketing</Dropdown.Item>
                    <Dropdown.Item href="/services/web-design-and-development">Web Design & Development</Dropdown.Item>
                    <Dropdown.Item href="/services/creative-branding">Creative Branding</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                <Nav.Link
                  href={"/projects"}
                  className={splitLocation[1] === "projects" ? "active" : ""}
                >
                  Projects
                </Nav.Link>

                {/* <Nav.Link
                  href={"/insights"}
                  className={splitLocation[1] === "insights" ? "active" : ""}
                >
                  Insights
                </Nav.Link> */}

                
                <Nav.Link
                  href={"/contact-us"}
                  className={`${splitLocation[1] === "contact-us" ? "active" : ""
                    }`}
                >
                  Connect
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <div className="flexhead">
            <span onClick={() => setModalShow(true)} className="btn btn-purple">
              Get in Touch
            </span>
            {/* <ThemeSwitcher /> */}
            <button
              type="button"
              onClick={toggleShow}
              className="navbar-toggler"
              aria-label="Nav Toggle"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </Container>
      </Navbar>
      <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;

function ProjectModal(props: any) {
  return (
    <Modal
      className="contact-modal"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="lenis">
        <h2 className="heading">
          Get in touch
        </h2>
        <BottomForm />
      </Modal.Body>
    </Modal>
  );
}