import React from 'react'

import { Nav, NavItem, NavLink } from 'reactstrap'

export const AppBar = () => {
  return (
<div>
  <Nav tabs>
    <NavItem>
      <NavLink
        
        href="/"
      >
        Home
      </NavLink>
    </NavItem>
    
      
    <NavItem>
      <NavLink href="/Contact">
        Contact
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/About">
        About
      </NavLink>
    </NavItem>
    
  </Nav>
</div>
    
  )
}
