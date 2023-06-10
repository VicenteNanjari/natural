import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span></span>
      <Link to="/" className="ruta"> Home </Link> | <Link to="/favoritos" className="ruta"> Favoritos </Link>
      <span></span>
    </nav>
  );
}
