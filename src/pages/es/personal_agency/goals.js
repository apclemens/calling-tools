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
      title="Desarrollar metas profesionales y de vida"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li><Link to="/es/who_am_i/know_your_talents">Conozca sus talentos</Link></li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul><li>Desarrollar metas profesionales y de vida</li><li><Link to="/es/personal_agency/mentor">Buscar un/a mentor/a</Link></li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li><Link to="/es/personal_agency/volunteer">Voluntario/a!</Link></li><li><Link to="/es/personal_agency/business">Considere iniciar su propio negocio o servicio</Link></li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li><Link to="/es/personal_agency/transactions">Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</Link></li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Desarrollar metas profesionales y de vida</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h2>Decide qué es lo que más quieres y establece metas para convertir tus sueños en realidad. Planifica tus objetivos por completo.
</h2>
<ul>
<li aria-level="3">
<h3>Escribe las áreas principales de tu vida como encabezados, cada una en una página separada. A continuación, se muestran algunas áreas de ejemplo:</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Aventuras / Viajes</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>carrera</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>comunidad</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Educación / estudio / desarrollo profesional</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Familia / matrimonio</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>finanzas</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Amigos / Relaciones</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Salud / Fitness / Deportes</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ayudando a otros / Filantropía / Servicio</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Aficiones</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Casa</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Crecimiento personal</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>política</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Leyendo</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Jubilación</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Espiritual / Fe</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Crea objetivos medibles para cada uno, incluida una línea de tiempo.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Enumera los hitos deseados y la acción requerida.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Visita tu lista de objetivos a menudo, para administrar e implementar de manera oportuna.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Registra cualquier pista de profesión que se te ocurra durante el proceso de implementación de objetivos en todos los aspectos de su vida.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<div className="quote">
<h3><i><span style={{fontWeight: 400}}>&ldquo;Una de las lecciones con las que crecí fue ser siempre fiel a ti misma y nunca dejar que lo que alguien dice te distraiga de tus objetivos.&rdquo;&nbsp;</span></i></h3>
<h3><i><span style={{fontWeight: 400}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --Michelle Obama</span></i></h3>
</div>


<Link className="back_link" to="/es/personal_agency/">De regreso: Paso 3: hazte cargo</Link><Link className="next_link" to="/es/personal_agency/mentor">Siguiente página: Buscar un/a mentor/a</Link>
    </div>


  </Layout>
)

export default SecondPage
