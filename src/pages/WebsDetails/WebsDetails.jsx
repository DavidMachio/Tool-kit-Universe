import "./WebsDetails.css"
import { getWebs } from "../../datas/webs";
import { NavLink, useParams } from "react-router-dom"


const WebsDetail = () => {

  const { name } = useParams();
  const web = getWebs(name)

  if (!web) {
    return (
      <main>
        <h2>Website not found</h2>
      </main>
    );
  } else {
    return (
      <main className="details">

        <div className="container">
          <h1 className="app-name">{web.name}</h1>
          <div className="buttons">
            <NavLink to="/explore">
              <a className="previo">volver</a>
            </NavLink>
            <a className="visitar" href={web.url} target="_blank">Visitar</a>

          </div>
          <div className="ficha">
            <article className="images">
              <img className="cover" src={web.imgcard} />
              <div className="miniaturas">
                <img className="mini" src={web.img1} />
                <img className="mini" src={web.img2} />
              </div>
            </article>
            <p className="description" >{web.description}</p>
          </div>
        </div>


      </main>
    )
  }
}

export default WebsDetail;

<div className="box">
  <pre>
    {`onst WebsDetail = () => {

const { name } = useParams();
const web = getWebs(name)

if (!web) {
  return (
    <main>
      <h2>Website not found</h2>
    </main>
  );
} else {
  return (
    <main className="details">
      <div>
        <NavLink to="/explore">
          <button className="previo">⬅</button></NavLink>
      </div>
      <div className="container">
        <h1>{web.name}</h1>
        <div className="ficha">
          <img className="cover" src={web.imgcard} />
          <div className="info">
            <p className="description" >{web.description}</p>
            <a className="visitar" href={web.url} target="_blank">Visitar</a>
          </div>`}
  </pre>
</div>