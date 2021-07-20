import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Herramientas de Llamada"
    image="map.jpg"
    language="es"
  >
    <Seo
      title="test"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li>test</li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h2>Haz una lista de los más probable a los menos probable para obtener un trabajo más rápidamente:&nbsp;</h2>
<p><br /></p>
<ul>
<li aria-level="3">
<h3>Tu amigo es dueño de la compañía y piensa que serías una buena opción.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ya estás en la empresa y te están preparando para avanzar.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Tienes una fuerte conexión con alguien en el liderazgo de la compañía que está listo para hacer las conexiones por ti.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Los gerentes de contratación te están buscando porque pareces tener las calificaciones correctas.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Alguien que conoces en la organización te proporciona conexiones.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Has investigado mucho sobre la empresa, tienes un excelente currículum que se ajusta a tus intereses y una poderosa carta de presentación dirigida a la persona adecuada.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Publicas tu currículum cuidadosamente diseñado en línea, en varios sitios de reclutamiento, con palabras clave para capturar una organización con una apertura que coincida con tus intereses. 
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Envías tu currículum a una empresa con una carta de presentación genérica.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Miras películas en tu computadora todo el día y esperas que el trabajo te encuentre.
</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/es/personal_agency/parallel">Back to: test</Link><Link className="next_link" to="/es/personal_agency/online">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
