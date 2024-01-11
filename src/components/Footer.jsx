import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/blue"}>blue</NavLink>
      <NavLink to={"/red"}>red</NavLink>
      <NavLink to={"/purple"}>purple</NavLink>
    </footer>
  );
}
