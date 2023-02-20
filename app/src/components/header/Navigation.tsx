import React, { useContext } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AdminContext";

/*****      NAVIGATION     *****/
export default function Navigation() {
  const { pathname } = useLocation();
  const { userLog } = useContext(UserContext);
  const navi = useNavigate();

  const navigTo = (ev: any) => {
    navi(ev.target.id);
  };

  return (
    <Nav
      className="header_nav col-6 d-flex justify-content-evenly"
      variant="tabs"
    >
      {userLog.admin && (
        <Dropdown navbar={false}>
          <Dropdown.Toggle id="navBoutique">Boutique</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className={
                pathname === "/boutique/savon_marseille"
                  ? "activeNav"
                  : "navItems"
              }
              id="/boutique/savon_marseille"
              onClick={(e) => navigTo(e)}
            >
              Savons de Marseille
            </Dropdown.Item>
            <Dropdown.Item
              className={
                pathname === "/boutique/douche" ? "activeNav" : "navItems"
              }
              id="/boutique/douche"
              onClick={(e) => navigTo(e)}
            >
              Douche
            </Dropdown.Item>
            <Dropdown.Item
              className={
                pathname === "/boutique/corps" ? "activeNav" : "navItems"
              }
              id="/boutique/corps"
              onClick={(e) => navigTo(e)}
            >
              Corps
            </Dropdown.Item>
            <Dropdown.Item
              className={
                pathname === "/boutique/savon_leserail"
                  ? "activeNav"
                  : "navItems"
              }
              id="/boutique/savon_leserail"
              onClick={(e) => navigTo(e)}
            >
              Savons Le Serail
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}

      {!userLog.admin && (
        <>
          <Nav.Item>
            <Link
              to="/boutique/savon_marseille"
              className={
                pathname === "/boutique/savon_marseille"
                  ? "activeNav"
                  : "navItems"
              }
            >
              Savons de Marseille
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/boutique/douche"
              className={
                pathname === "/boutique/douche" ? "activeNav" : "navItems"
              }
            >
              Douche
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/boutique/corps"
              className={
                pathname === "/boutique/corps" ? "activeNav" : "navItems"
              }
            >
              Corps
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/boutique/savon_leserail"
              className={
                pathname === "/boutique/savon_leserail"
                  ? "activeNav"
                  : "navItems"
              }
            >
              Savons Le Serail
            </Link>
          </Nav.Item>
        </>
      )}

      {userLog.admin && (
        <Nav.Item>
          <Link
            to="/stock"
            className={pathname === "/stock" ? "activeNav" : "navItems"}
          >
            Stock
          </Link>
        </Nav.Item>
      )}
      <Nav.Item>
        <Link
          to="/contact"
          className={pathname === "/contact" ? "activeNav" : "navItems"}
        >
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}
