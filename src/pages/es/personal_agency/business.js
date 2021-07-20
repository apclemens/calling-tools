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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li>test</li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1>Haz estas preguntas:</h1>
<ul>
<li><h2>¿Dónde hay una brecha en los servicios en mi comunidad?</h2></li>
<li><h2>¿Dónde hay trabajos que otros han rechazado o que aún no se reconocen como valiosos?&nbsp;</h2></li>
<li><h2>¿Qué tipos de servicios tengo la capacidad y el interés de proporcionar?</h2></li>
<li><h2>¿Quién es el público ideal para beneficiarse de estos servicios?
</h2></li>
<li><h2>Reúne los datos necesarios para explorar este nuevo servicio. Prueba estas ideas con una pequeña audiencia de amigos y colegas que te apoyan. Escucha atentamente sus comentarios y sugerencias.&nbsp;</h2></li>
<li><h2>Identifica los próximos pasos y el cronograma para implementar este servicio.&nbsp;</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3>"<i>Tenía que ganarme la vida y mi propia oportunidad. ¡Pero lo hice! No te sientes a esperar a que surjan las oportunidades. Levántate y créalas."</i>&nbsp;</h3>
<h3><i>- Madam C.J. Walker</i></h3>
</div>
<p></p>


<Link className="back_link" to="/es/personal_agency/volunteer">Back to: test</Link><Link className="next_link" to="/es/personal_agency/parallel">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
