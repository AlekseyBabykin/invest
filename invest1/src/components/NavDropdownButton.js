import React from "react";
import { NavDropdown } from "react-bootstrap";
import "../styles/NavDropdownButton.css";
import { MANAGEMENT_ROUTE } from "../utils/consts";

const NavDropdownButton = (props) => {
  return (
    <NavDropdown title={props.name} id="navbarScrollingDropdown">
      {props.allTopiks.map((el, index) => (
        <NavDropdown.Item
          key={index}
          href={MANAGEMENT_ROUTE + "/" + el}
          id="custom-hover"
        >
          {el}
          <NavDropdown.Divider />
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default NavDropdownButton;
