import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../contants/images';
import {Link} from "react-router-dom"
import './Navbar.css';
import AutoProvider from '../../PrivateRoute/AuthContext';

const Navbar = () => {

  const {jwt,setJwt} = useContext(AutoProvider)
  console.log(jwt)



  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="">{jwt ? null :"Inicio"}</Link></li>
        <li className="p__opensans"><Link to="portafolio">{jwt ? null : "Portafolio"}</Link></li>
      </ul>
      <div className="app__navbar-login">
        <Link to={jwt ? null : "/Register"} className="p__opensans">{jwt ? "Cuenta de empresa" : "Registrarse"}</Link>
        <div />
        <Link to={jwt ? null : "/Login"} className="p__opensans">{jwt ? jwt.result.namecompany : "Iniciar Sesion"}</Link>

        <Link to="#" className="p__opensans">{jwt ? <span onClick={() => setJwt(null)}  >salir</span> : null}</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
