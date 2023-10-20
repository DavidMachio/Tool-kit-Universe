import "./Componentes.css"

const Componentes = () => {

  return (
    <main className="componentes">
      <section className="cabecera">
        <h1>Descargarte los</h1>
        <h2>Componentes</h2>
        <p>Si te gusta la estética de nuestra web, puedes descargate los componentes y aplicarlos en tu web con un par de pasos muy sencillos</p>
        <h3>Te mostramos como...</h3>
      </section>
      <section className="comp-card">
        <img className="ejemplo-card" src="/images/componentes/card.png" alt="" />
        <p>En este caso tenemos un componente prediseñado de carta, por un lado podras obtener el codigo jsx de etiquetas, donde se definen la información a mostrar del articulo, donde podrás substituir el nombre del data al que deses hacer el .map, y sacar los objetos por separado que quieras mosrar.</p>
        <article className="article">
          <div className="card-code">
            <h3>Codigo .jsx</h3>
            <pre>
              {String.raw` 
          <div> 
            <ul className="weblist"> 
              {websList.map((web) => ( 
                <li key={web.id} className="card"> 
                  <img className="imgcard" src={web.imgcard} alt={\`portada \${web.name}\`} /> 
                  <div className="nameapp"> 
                    <h3 className="card-name">{web.name}</h3> 
                    <NavLink to={\`/webs/\${web.name}\`}>
                      <button className="mas">Mas</button>
                    </NavLink> 
                  </div> 
                  <p className="card-description">{web.descriptioncard}</p>
                  <p className="card-tags">{web.tags}</p> 
              </li>
            ))} 
          </ul> 
        </div> `}
            </pre>
          </div>
          <p>Y después podras obtener todo el codigo de .css, que podras dejarlo con este estilo si es de tu gusto, o modificar colores o tamaños a tu gusto de una manera muy sencilla gracias a sus clases indicadas referenciando a cada información</p>
          <div className="card-code css">
            <h3>Codigo .css</h3>
            <pre>
              {String.raw` 
          .weblist {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            margin: 0 auto;
            gap: 30px;
            justify-items: space-between;
          }
          .card {
            border: 2px solid black;
            box-shadow: 0px 0px 12px 0px var(--tertiary);
            border-radius: 10px;
            padding: 10px;
          }
          .imgcard {
            border-radius: 5px;
            height: 300px;
            width: 100%;
            object-fit: cover;
          }
          .nameapp {
            font-size: 20px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          .mas {
            color: var(--secondary);
            border: 2px solid inherit;
            background-color: rgb(178, 254, 178);
            width: 80px;
            height: 30px;
            text-transform: uppercase;
            border-radius: 5px;
          }
          .mas:hover {
            scale: 105%;
            background-color: transparent;
            color: inherit;
            box-shadow: 0px 0px 12px 0px var(--tertiary);
          }
          .card-icon {
            display: none;
            height: 20px;
            width: auto;
          }
          .card-description {
            padding: 5px;
          }
          .card-tags {
            padding: 5px;
            color: grey;
            font-style: italic;
          } `}
            </pre>
          </div>
        </article>
      </section>
    </main>

  )
}
export default Componentes;