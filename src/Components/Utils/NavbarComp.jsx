import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../assets/tam-black.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/" className="me-3">
          <b>TAM</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/" className="me-2">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="/company" className="me-2">
              <FontAwesomeIcon icon={faAddressBook} className="me-1" />
              Company Profile
            </Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Tentang Kami</NavDropdown.Item>
              <NavDropdown.Item href="/visi">Visi & Misi</NavDropdown.Item>
              <NavDropdown.Item href="/motto">
                Motto & Nilai Perusahaan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
