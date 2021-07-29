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
      title="Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li><Link to="/es/who_am_i/know_your_talents">Conozca sus talentos</Link></li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul><li><Link to="/es/personal_agency/goals">Desarrollar metas profesionales y de vida</Link></li><li><Link to="/es/personal_agency/mentor">Buscar un/a mentor/a</Link></li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li><Link to="/es/personal_agency/volunteer">Voluntario/a!</Link></li><li><Link to="/es/personal_agency/business">Considere iniciar su propio negocio o servicio</Link></li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li>Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</h1>

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


<Link className="back_link" to="/es/personal_agency/parallel">De regreso: Persecuciones paralelas</Link><Link className="next_link" to="/es/personal_agency/online">Siguiente página: Cree una presencia en línea viable</Link>
    </div>


  </Layout>
)

export default SecondPage
