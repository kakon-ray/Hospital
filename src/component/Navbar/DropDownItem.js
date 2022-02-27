/* eslint-disable no-lone-blocks */
import React from "react";
import { NavDropdown } from "react-bootstrap";

export default function DropDownItem({ item, link, ...other }) {
  return (
    <>
      <NavDropdown.Item href={link} {...other}>
        {item}
      </NavDropdown.Item>
    </>
  );
}
