import {
  faGoogle,
  faInstagram,
  faInvision,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import HeaderWrapper from "./HeaderWrapper";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <div className="container">
        {/* Navbar start */}
        <Navbar light expand="md">
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
            <div className="d-flex pe-4">
              <FontAwesomeIcon className="me-2 mt-3" icon={faMapMarkerAlt} />
              <p className=" mt-3">
                Чебоксары, <br /> Энтузиастов 1А{" "}
              </p>
            </div>
            <div className=" d-flex pe-4">
              <FontAwesomeIcon className="me-2 mt-3" icon={faPhoneAlt} />
              <p className="fw-bold mt-3">+7900 333 10 40</p>
            </div>
            <Button className="" variant="contained" color="primary">
              Заказать звонок
            </Button>
          </Collapse>
        </Navbar>

        {/* Header start */}
        <Header className="bg-imag">
          <div className="sidebar text-center">
            <p>— Стоматология в Чебоксарах</p>
          </div>
        </Header>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
