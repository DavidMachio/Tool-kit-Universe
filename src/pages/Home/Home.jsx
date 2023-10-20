import BannerHome from "../../components/Banners/Bannerhome/Bannerhome";
import BannerHome2 from "../../components/Banners/Bannerhome2/Bannerhome2";
import "./Home.css"

const Home = () => {
  return (
    <main className="home">
      <BannerHome subtitle="Crece como" title="desarrollador" description={"Visita decenas de webs para mejorar tu capacidad en el mundo del desarrollo web."} img={"./images/banners/desarrollo-web.png"} />
      <h1 className="usuarios">Mas de 10Mil usuarios consultan nuestra web a diario</h1>
      <button className="unete">Únete a ellos</button>
      <BannerHome2 subtitle="Herramientas" title="para diseño gráfico" description={"Gran número de herramientas con recursos, tutoriales y mucho más para desarrollar tu creatividad"} img={"./images/banners/DISENO.png"} />
    </main>
  )
}
export default Home;