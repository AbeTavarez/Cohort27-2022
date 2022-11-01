import { Link, NavLink } from "react-router-dom";
import {logOut} from '../utils/users-service'
const NavBar = ({user, setUser}) => {
  const handleLogOut =()=> {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <NavLink to="/orders" className='some-class'>Order History</NavLink> &nbsp; | &nbsp;
      <NavLink to="/orders/new">New Order</NavLink>
      {user && <h3>{user.name}</h3>}
      {user && <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>}
    </nav>
  );
};
export default NavBar;
