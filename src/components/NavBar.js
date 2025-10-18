import { NavLink } from "react-router-dom";

function NavBar({ logout }) {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default NavBar;
