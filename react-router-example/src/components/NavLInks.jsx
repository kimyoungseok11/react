import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/1"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
          })}
        >
          profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=kim"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          about?name=kim
        </NavLink>
      </li>
    </ul>
  );
}
