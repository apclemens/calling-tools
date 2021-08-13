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
      title="Voluntario/a!"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/volunteer">English</Link><Link to="/fr/personal_agency/volunteer">Français</Link><Link className="current" to="/es/personal_agency/volunteer">Español</Link><Link to="/ht/personal_agency/volunteer">Krèyol ayisyen</Link><Link to="/pt/personal_agency/volunteer">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul style={{display: 'none'}}><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li><Link to="/es/who_am_i/know_your_talents">Conozca sus talentos</Link></li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul style={{display: 'none'}}><li><Link to="/es/personal_agency/goals">Desarrollar metas profesionales y de vida</Link></li><li><Link to="/es/personal_agency/mentor">Buscar un/a mentor/a</Link></li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li>Voluntario/a!</li><li><Link to="/es/personal_agency/business">Considere iniciar su propio negocio o servicio</Link></li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li><Link to="/es/personal_agency/transactions">Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</Link></li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">Referencias</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Voluntario/a!</h1>

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


<Link className="back_link" to="/es/personal_agency/education">De regreso: Persiga su educación</Link><Link className="next_link" to="/es/personal_agency/business">Siguiente página: Considere iniciar su propio negocio o servicio</Link>
    </div>


  </Layout>
)

export default SecondPage
