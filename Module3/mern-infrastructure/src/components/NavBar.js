import { Link, NavLink } from "react-router-dom";

const NavBar = ({user}) => {
  return (
    <nav>
      <NavLink to="/orders" className='some-class'>Order History</NavLink> &nbsp; | &nbsp;
      <NavLink to="/orders/new">New Order</NavLink>
      {user && <h3>{user.name}</h3>}
    </nav>
  );
};
export default NavBar;
