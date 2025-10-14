import { NavLink } from "react-router-dom";


const Header = () => {
  return(
    <>
    <header>
            <NavLink to="/">
              <button><img src="/logo.png" alt="Not-Found" style={{ height: "60px" }} /></button>
            </NavLink>
            <ul>
              <li>
                <NavLink to="/">
                  <button><strong>Inicio</strong></button>
                </NavLink>
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