import "./Explore.css"

import { webs } from "../../datas/webs"
import { useState } from "react"
import { NavLink } from "react-router-dom"



const Explore = () => {

  const [websList, setWebsList] = useState(webs)
  const [favourites, setFavourites] = useState([])

  const addFavourite = (item) => {
    setFavourites([...favourites, item])
    console.log(favourites)
  }


  const filterWebsapp = (word) => {
    const newWebsList = webs.filter((web) =>
      web.name.toLowerCase().includes(word.toLowerCase()) ||
      web.tags.toLowerCase().includes(word.toLowerCase())
    );
    setWebsList(newWebsList)
  }

  const [hide, setHide] = useState(false)

  const toggleHide = () => {
    setHide(!hide)
  }


  return (
    <main>
      <div className="top">
        <div className="seeker">
          <input className="search" type="text" onInput={(ev) => filterWebsapp(ev.target.value)} placeholder="Busca tu Web App" />
          <p className="results">{websList.length} Resultados</p>
        </div>
        <div className="favoritos">
          <button className="icono-favoritos" onClick={toggleHide}>⭐️</button>
          {favourites.map((favourite) => (
            <li key={favourite.id} className={hide == true ? "fav" : "hide"}>
              <h3>{favourite.name}</h3>
            </li>
          ))}
        </div>
      </div>
      <div>
        <ul className="weblist">
          {websList.map((web) => (
            <li key={web.id} className="card">

              <img className="imgcard" src={web.imgcard} alt={`portada ${web.name}`} />
              <div className="nameapp">
                <h3 className="card-name">{web.name}</h3>
                <NavLink to={`/webs/${web.name}`}>
                  <button className="mas">Mas</button>
                </NavLink>
              </div>
              <p className="card-description">{web.descriptioncard}</p>
              <div className="favourites">
                <p className="card-tags">{web.tags}</p>
                <button className="add" onClick={() => addFavourite(web)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Explore;