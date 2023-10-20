import "./Bannerhome2.css"
import { NavLink } from "react-router-dom";

const Bannerhome2 = ({ subtitle, title, description, img }) => {



  return (
    <div className="banner2">
      <section className="bannerhome2">
        <img className="img2" src={img} alt="ilustracion de hombre programando" />
        <div className="texts2">
          <h2>{subtitle}</h2>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <NavLink to="/explore" className="explorar" >Explorar</NavLink>
        </div>
      </section>
    </div>
  )
}
export default Bannerhome2;

/*<section className="carrousel">
        <div className="recomendado">
          <img src="./images/iconos/minicodelab.png" alt="" />
          <a href="https://www.minicodelab.dev/" target="_blank">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./images/iconos/frecodecamp.png" alt="" />
          <a href="https://www.freecodecamp.org/" target="_blank">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./iconos/minicodelab.png" alt="" />
          <a href="">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./iconos/minicodelab.png" alt="" />
          <a href="">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./iconos/minicodelab.png" alt="" />
          <a href="">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./iconos/minicodelab.png" alt="" />
          <a href="">miniCodeLab</a>
        </div>
        <div className="recomendado">
          <img src="./iconos/minicodelab.png" alt="" />
          <a href="">miniCodeLab</a>
        </div>
      </section>*/