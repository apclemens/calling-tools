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
      title="Considere iniciar su propio negocio o servicio"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/business">English</Link><Link to="/fr/personal_agency/business">Français</Link><Link className="current" to="/es/personal_agency/business">Español</Link><Link to="/ht/personal_agency/business">Krèyol ayisyen</Link><Link to="/pt/personal_agency/business">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul style={{display: 'none'}}><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li><Link to="/es/who_am_i/know_your_talents">Conozca sus talentos</Link></li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul style={{display: 'none'}}><li><Link to="/es/personal_agency/goals">Desarrollar metas profesionales y de vida</Link></li><li><Link to="/es/personal_agency/mentor">Buscar un/a mentor/a</Link></li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li><Link to="/es/personal_agency/volunteer">Voluntario/a!</Link></li><li>Considere iniciar su propio negocio o servicio</li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li><Link to="/es/personal_agency/transactions">Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</Link></li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">Referencias</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Considere iniciar su propio negocio o servicio</h1>

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


<Link className="back_link" to="/es/personal_agency/volunteer">De regreso: Voluntario/a!</Link><Link className="next_link" to="/es/personal_agency/parallel">Siguiente página: Persecuciones paralelas</Link>
    </div>


  </Layout>
)

export default SecondPage
