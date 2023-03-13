
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

   return (
      <header className="header">
         <div className="header__container">
            <img src='./imgs/adn.jpg' alt="logo" className="Header__logo"></img>
            <nav className="navbar">
               <Link className="navbar__link" to={"Nosotros"}>Nosotros</Link>
               <Link className="navbar__link" to={"Servicios"}>Servicios</Link>
               <Link className="navbar__link" to={"Contacto"}>Contacto</Link>
               <Link className="navbar__link" to={"/Cart"}>🛒</Link>
            </nav>

         </div>
      </header>

   );


}

