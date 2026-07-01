import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    < Link to="/">Home</Link>
    < Link to="/about">About us</Link>
    <Link to="/contact">Contact us</Link>
    </>
  );
}

export default Navbar;