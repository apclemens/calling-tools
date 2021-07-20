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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li>test</li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/drawing.jpg"
/>
</div>
<h2>Si tu carrera o profesión no alimenta actualmente tu pasión (incluso cuando paga las facturas), perseguir intereses del lado que alimentan tus pasiones puede brindarte un sentido más profundo de satisfacción y te permite explorar aún más tu campo de interés.
.&nbsp;</h2>
<h2>Formas de perseguir intereses paralelos:
:&nbsp;</h2>
<ul>
<li><h2>Continuar la educación - tomar incluso una clase en tu campo de interés puede ponerte en contacto con profesores y otros estudiantes que pueden formar parte de tu red de apoyo.</h2></li>
<li><h2>Asume proyectos paralelos para obtener ingresos adicionales mientras hace que tus talentos "salgan" y desarrollen tu cartera. Los intereses paralelos (en cualquier área de interés) pueden ampliar tus opciones y crear otras vías para un trabajo significativo. La "gig-economy"(un mercado laboral caracterizado por la prevalencia de contratos a corto plazo o trabajo independiente en lugar de trabajos permanentes) está creciendo y cada día se publican más oportunidades. Encuentra tu área de interés y descarga la aplicación de gigs adecuada para obtener más información.</h2></li>
<li><h2>Ofrece expandir tu rol en el trabajo para incluir tus intereses. Explora las opciones disponibles y el proceso para llegar allí.</h2></li>
</ul>


<Link className="back_link" to="/es/personal_agency/business">Back to: test</Link><Link className="next_link" to="/es/personal_agency/transactions">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
