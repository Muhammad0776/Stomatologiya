import {
  faGoogle,
  faInstagram,
  faInvision,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import HeaderWrapper from "./HeaderWrapper";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <div className="container">
        {/* Navbar start */}
        <Navbar light expand="md pb-0">
          <NavbarBrand href="/">
            <img className="logo" src="/images/logo.png" alt="" />
          </NavbarBrand>
          <div className="d-flex ms-4 me-4">
            <a className="icons me-3" href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="icons me-3" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="icons me-3" href="#">
              <FontAwesomeIcon icon={faInvision} />
            </a>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto pe-4" navbar>
              <NavItem>
                <NavLink className="nav-title" href="/">
                  О нас
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-title" href="/">
                  Услуги
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-title" href="/">
                  Специалисты
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-title" href="/">
                  Пациентам
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-title" href="/">
                  Контакты
                </NavLink>
              </NavItem>
            </Nav>
            <div className="d-flex pe-4 subtitle">
              <FontAwesomeIcon className="me-2 mt-3" icon={faMapMarkerAlt} />
              <p className=" mt-3">
                Чебоксары, <br /> Энтузиастов 1А{" "}
              </p>
            </div>
            <div className=" d-flex pe-4">
              <a href="tel:+998911919442">
                {" "}
                <FontAwesomeIcon
                  className="subtitle me-2 mt-3"
                  icon={faPhoneAlt}
                />
              </a>
            </div>
            <Button className="but" variant="contained" color="primary">
              Заказать звонок
            </Button>
          </Collapse>
        </Navbar>

        {/* section start */}
        <section className="bg-image rounded">
          <div className="sidebar h-100 py-4 text-start mt-5 pt-5">
            <p> — Стоматология в Чебоксарах </p>
            <h1 className="mb-4">
              Лечение зубов <br /> в тот же день
            </h1>
            <p>
              Мы проведем полную консультацию, <br /> профессиональную гигиену
              полости рта, <br /> лечение зубов и десен
            </p>
            <Button className="mt-4 button" variant="contained" color="primary">
              Заказать звонок
            </Button>
          </div>
        </section>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
