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
      title="Buscar un/a mentor/a"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li><Link to="/es/who_am_i/know_your_talents">Conozca sus talentos</Link></li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul><li><Link to="/es/personal_agency/goals">Desarrollar metas profesionales y de vida</Link></li><li>Buscar un/a mentor/a</li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li><Link to="/es/personal_agency/volunteer">Voluntario/a!</Link></li><li><Link to="/es/personal_agency/business">Considere iniciar su propio negocio o servicio</Link></li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li><Link to="/es/personal_agency/transactions">Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</Link></li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Buscar un/a mentor/a</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/hana.jpg"
/>
</div>
<h2>Un mentor/a es un consejero o guía de confianza. Un mentor puede compartir con un mentoreado (o protegido) información sobre su propia carrera profesional, así como proporcionar orientación, motivación, apoyo emocional y modelos a seguir. Un mentor puede ayudar a explorar profesiones, establecer metas, desarrollar contactos e identificar recursos.</h2>
<h3>Un buen mentor posee las siguientes cualidades:</h3>
<ul>
<li aria-level="3">
<h3>Disposición para compartir habilidades, conocimientos y experiencia. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Demuestra una actitud positiva y actúa como un modelo positivo a seguir. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Toma un interés personal en la relación de mentoría. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Exhibe entusiasmo en el campo. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Valora el aprendizaje continuo y el crecimiento en el campo.</h3>
</li>
</ul>
<h3>Beneficios de tener un mentor:&nbsp;</h3>
<ol>
<li>
<h3>Asesoramiento:&nbsp;el mayor beneficio de tener un mentor es tener a alguien a quien le puedas hacer preguntas y obtener consejos. Los mentores pueden compartir una gran cantidad de sabiduría e información sobre las mejores prácticas en el lugar de trabajo, protocolos y comportamientos apropiados.</h3>
</li><li>
<h3>Trabajo en red: formar una relación con un mentor abre las puertas a otros grupos. Te dará la oportunidad de obtener presentaciones personales de los contactos de tu mentor, lo que puede haber llevado años a tu mentor establecer.</h3>
</li><li>
<h3>Aliento: podrías describir a un mentor como animador profesional para tu carrera profesional. Es probable que tu mentor haya experimentado éxitos y desafíos similares que encontrarás al comienzo de tu carrera profesional. Al compartir cómo superaron sus desafíos, los mentores pueden alentarte a alcanzar la meta y seguir persiguiendo tus objetivos.</h3>
</li><li>
<h3>Perspectiva:&nbsp;&nbsp;a través de tus diversas experiencias, los mentores pueden ofrecer una perspectiva y visión diferente a la tuya. Te harán preguntas que quizás no se te ocurran, pero que son tan importantes para resolver un problema o planificar tu carrera profesional.</h3>
</li><li>
<h3>Reducción de los sentimientos de aislamiento:&nbsp;tener a alguien fuera de tu entorno de trabajo directo con el que puedas hacer preguntas, intercambiar ideas y confiar, ayudará a crear una sensación de asociación entre pares que no siempre estará disponible en tu lugar de trabajo.</h3>
</li><li>
<h3>Responsabilidad:&nbsp;un buen mentor te proporcionará comentarios honestos y lo hará responsable de tus objetivos profesionales.</h3>
</li><li>
<h3>Planificación profesional:&nbsp;&nbsp;como aprendiz, puedes sentarte con tu mentor para establecer objetivos a largo plazo y planificar estratégicamente los próximos pasos para alcanzar tus objetivos profesionales.</h3>
</li><li>
<h3>Confianza y desarrollo del talento:&nbsp;&nbsp;Un mentor que tenga experiencia en su campo podrá identificar tus fortalezas y talentos y ofrecer sugerencias sobre cómo puedes desarrollarlos y crecer profesionalmente. ¡Esto garantiza garantizar tu confianza y rendimiento laboral!</h3>
</li>
</ol>
<p></p>


<Link className="back_link" to="/es/personal_agency/goals">De regreso: Desarrollar metas profesionales y de vida</Link><Link className="next_link" to="/es/personal_agency/research">Siguiente página: Hacer la investigación</Link>
    </div>


  </Layout>
)

export default SecondPage
