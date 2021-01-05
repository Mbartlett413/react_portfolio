import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar() {
  return (
    <div className="container">
        <Nav>
            <NavItem>
            <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Work</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem>
            <NavLink disabled href="#">Shop</NavLink>
            </NavItem>
            </Nav>
    </div>

  );
}

export default Navbar;



