
import { NavLink } from "react-router-dom";
import "./Header.css"
import { useState } from "react";



const Header = ({ action, icono }) => {


  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }


  return (
    <header>
      <NavLink className="toolKit" to="/">ToolkitUniverse</NavLink>
      <nav>
        <ul className={menu == true ? "header-ul" : " header-ul visible"}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/explore">Explore</NavLink></li>
          <li><NavLink to="/componentes">Components</NavLink></li>
        </ul>

        <button className="burguer" onClick={toggleMenu}>🍔</button>
        <button className="login">🙂</button>
        <button className="theme" onClick={action}>{icono == true ? "🌖" : "🌒"}</button>
      </nav>
    </header>
  )
}
export default Header;