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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li>test</li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<h2>Se voluntario/a en una organización que está en línea con tus intereses. Es más probable que identifiques tus próximos pasos o "llamadas" antes haciendo algo (incluso cuando no te pagan) en lugar de quedarte sentado en casa sin hacer nada.</h2>
<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/volunteer.jpg"
/>
</div>
<ul>
<li><h2>Hacer voluntariado te brinda la oportunidad de aprender más sobre tu campo de interés, desarrollar habilidades prácticas y cultivar oportunidades.</h2></li>
<li><h2>Hacer voluntariado te ayuda a ganar más experiencia laboral.</h2></li>
<li><h2>Hacer voluntariado amplía tu red de conexiones.</h2></li>
<li><h2>Al hacer voluntariado, el supervisor u otros colegas pueden proporcionarte una referencia laboral.</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;Todos pueden ser geniales ... porque cualquiera puede servir. No es necesario tener un título universitario para servir. No es necesario que el sujeto y el verbo acepten servir. Tu sólo necesitas un corazón lleno de gracia. Un alma generada por amor.&rdquo;&nbsp;&nbsp;</i></h3>
<h3><i>--Martin Luther King, Jr.</i></h3>
</div>
<p></p>


<Link className="back_link" to="/es/personal_agency/education">Back to: test</Link><Link className="next_link" to="/es/personal_agency/business">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
