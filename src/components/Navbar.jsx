import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/blue"}>blue</NavLink>
      <NavLink to={"/red"}>red</NavLink>
      <NavLink to={"/purple"}>purple</NavLink>
    </div>
  );
}
