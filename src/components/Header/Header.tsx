import { NavLink } from "react-router-dom";


const Header = () => {
  return(
    <>
    <header>
            <a href="index.html"><img src="imgs/logo.png" alt="Not-Found" height="60px" /></a>
            <ul>
              <li>
                <a href="index.html"><strong>Inicio</strong></a>
              </li>
              <li>
                <a href="https://wa.me/1121687636?text=Hola%20quiero%20más%20información%20sobre%20las%20cabañas" target="_blank"><strong>Contacto</strong></a>
              </li>
            </ul>
    </header>
    </>
  )
}

export default Header