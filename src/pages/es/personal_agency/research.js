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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li>test</li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h2>Si estás debatiendo si avanzar en la búsqueda de una carrera o área de interés en particular:&nbsp;</h2>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<ul>
<li aria-level="3">
<h3>Construye tu red de mentores y personas que trabajan en tu campo de interés. Puedes incluir un conocido que tiene más experiencia en el campo, una persona más joven que está más familiarizada con las tendencias actuales, un grupo de pares donde puedes compartir libremente desafíos y logros, especialistas en conocimiento. Desarrollar relaciones de mentoría es un proceso que dura toda la vida, porque son estas conexiones las que a menudo te ayudarán a hacer más conexiones!&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Desarrolla un conjunto de preguntas que quieres que te contesten. Da forma a tus preguntas en función a tus propios valores profesionales que ya has identificado (pestaña anterior en este sitio). Y recuerda, esta no es una entrevista de trabajo.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Qué les gusta de su trabajo?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Qué posibilidades hay en esa área de trabajo?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Qué recomendarían si decides seguir esa área?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Educación adicional?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Experiencia de voluntariado?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Desarrolla una lista de personas que podrían darte su opinión sobre estas preguntas. ¿Conoces a alguien que ya esté trabajando en esa profesión? Ponte en contacto con ellos para obtener información adicional.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Comentarios de crowdsourcing (obtener información de un proyecto o tarea en particular por medio de enlistar los servicios de un largo número de personas, ya sea pagado o no pagado, comúnmente en internet) a tus preguntas en plataformas sociales como Quora, Facebook, LinkedIn, Slack, etc.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Realiza entrevistas con personas que ya están en esa área profesional, o personas que admiras.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Organiza un día de “observación” con alguien que se desempeñe en la profesión que te esta interesando.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Crea un "comité de claridad" o "junta asesora personal" de amigos que estén dispuestos a reunirse contigo periódicamente, para asesorarte y ayudarte a evaluar tus opciones. Este puede incluir compañeros, trabajadores más jóvenes, líderes senior o líderes de opinión en tu área de interés profesional.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/es/personal_agency/mentor">Back to: test</Link><Link className="next_link" to="/es/personal_agency/education">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
