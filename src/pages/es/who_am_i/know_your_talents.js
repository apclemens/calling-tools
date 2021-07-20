import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Herramientas de Llamada"
    image="inventory.jpg"
    language="es"
  >
    <Seo
      title="test"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li>test</li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/night.jpg"
/>
</div>
<h1><span style={{fontWeight: 400}}>Conoce tus talentos</span><span style={{fontWeight: 400}}><br /></span></h1>
<h1><span style={{fontWeight: 400}}>Dones&nbsp;- una capacidad o talento natural.</span></h1>
<h1>Talentos<span style={{fontWeight: 400}}>&nbsp;- aptitud o habilidad natural.</span></h1>
<h1>Fortalezas<span style={{fontWeight: 400}}>&nbsp;- una cualidad o atributo bueno o beneficioso de una persona.</span></h1>
<h2><span style={{fontWeight: 400}}>Conocer tus dones, talentos y fortalezas ayuda a identificar un mejor "ajuste" para una carrera exitosa. Al mismo tiempo, es importante estar abierto al crecimiento y al aprendizaje en nuevas áreas que aún no hemos desarrollado, abriendo nuevas ventanas de oportunidad.</span></h2>
<h2>Pon a prueba tus dones con estas herramientas en línea (en su mayoría gratuitas):
</h2>
<h2><a target="_blank" rel="noreferrer" href="http://www.self-directed-search.com/"><span style={{fontWeight: 400}}>http://www.self-directed-search.com/</span></a></h2>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>El mejor trabajo, la mejor carrera, para ti, la que te haga más feliz y más completo, será la que use: tus habilidades transferibles favoritas, en tus materias, campos o conocimientos especiales favoritos, un trabajo que te ofrece tus ambientes-personas preferidos, tus condiciones de trabajo preferidas, con tu salario preferido u otras recompensas, trabajando hacia tus metas y valores preferidos.&rdquo;&nbsp;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Richard N. Bolles, What Color is Your Parachute?</span></h3>
</div>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Debemos creer que estamos dotados para algo, y que esta cosa, a cualquier costo, debe lograrse.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Marie Curie</span></h3>
</div>


<Link className="back_link" to="/es/who_am_i/values">Back to: test</Link><Link className="next_link" to="/es/who_am_i/passion_and_interests">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
