import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap';

export const Header = () => {
  return(
          <div>
            <Nav>
              <NavItem>
              <NavLink href="/">User Form</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/usersList">Users List</NavLink>
              </NavItem>
            </Nav>
        </div>
 )
}