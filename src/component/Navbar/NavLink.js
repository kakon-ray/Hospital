import React from "react";
import { Nav } from "react-bootstrap";

export default function NavLink({ page, link, ...other }) {
  return (
    <>
      <Nav.Link href={link} {...other}>
        {page}
      </Nav.Link>
    </>
  );
}
