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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li>test</li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h2>Las siguientes son preguntas básicas para las que debes estar preparado para responder (Estas te las podrán hacer de varias maneras) antes de comenzar tu entrevista de trabajo.</h2>
<h2><i>¡Practica con un amigo antes de tiempo!
</i></h2>
<ul>
<li aria-level="2">
<h2>¿Por qué estás aquí? ¿Por qué estas interesado en este trabajo?
</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>¿Qué puedes hacer por nosotros?
</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>¿Qué tipo de persona eres?
</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>¿Qué te distingue de las muchas otras personas que solicitan este trabajo?
</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>¿Podemos pagarte?
</h2>
</li>
</ul>
<h2>Además, investiga a fondo la organización y está preparado para responder cuidadosamente a algunos aspectos de la misión y las operaciones de la organización.
</h2>
<h2>Llegar preparado con preguntas propias también les muestra que estás pensando por ti mismo y que tienes algo que ofrecer. Algunos ejemplos para considerar:
</h2>
<ul>
<li aria-level="3">
<h3>¿En qué consiste este trabajo?
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Cuáles son las habilidades que un empleado superior en este trabajo debería tener?
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Cuéntame sobre el entorno de la oficina y el tipo de personas con las que estaría trabajando.
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Qué esperaría mi supervisor de mí en términos de comunicación e informes sobre mi progreso laboral diario o semanal?
</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>¿Cuándo debería esperar recibir noticias suyas sobre una decisión?
</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/es/personal_agency/online">Back to: test</Link><Link className="next_link" to="/es/references">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
