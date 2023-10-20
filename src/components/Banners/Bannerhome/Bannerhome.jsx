import "./Bannerhome.css"
import { NavLink } from "react-router-dom";

const BannerHome = ({ subtitle, title, description, img }) => {



  return (
    <div className="banner">
      <section className="bannerhome">
        <div className="texts">
          <button className="subscribe">Únete a nuestra comunidad</button>
          <h2>{subtitle}</h2>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <NavLink to="/explore" className="explorar" >Explorar</NavLink>
        </div>

        <img className="img" src={img} alt="ilustracion de hombre programando" />

      </section>



    </div>
  )
}
export default BannerHome;

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