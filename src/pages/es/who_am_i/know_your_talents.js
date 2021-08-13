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
      title="Conozca sus talentos"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"><Link to="/en/who_am_i/know_your_talents">English</Link><Link to="/fr/who_am_i/know_your_talents">Français</Link><Link className="current" to="/es/who_am_i/know_your_talents">Español</Link><Link to="/ht/who_am_i/know_your_talents">Krèyol ayisyen</Link><Link to="/pt/who_am_i/know_your_talents">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/es/">¿Qué es el llamado?</Link></li><li><Link to="/es/personal_well_being">Paso 1: Cuídate</Link></li><li><Link to="/es/who_am_i/">Paso 2: Conoce quién eres</Link></li><ul style={{display: 'none'}}><li><Link to="/es/who_am_i/values">Valores en el trabajo y la vida</Link></li><li>Conozca sus talentos</li><li><Link to="/es/who_am_i/passion_and_interests">Pasiones e intereses</Link></li></ul><li><Link to="/es/personal_agency/">Paso 3: hazte cargo</Link></li><ul style={{display: 'none'}}><li><Link to="/es/personal_agency/goals">Desarrollar metas profesionales y de vida</Link></li><li><Link to="/es/personal_agency/mentor">Buscar un/a mentor/a</Link></li><li><Link to="/es/personal_agency/research">Hacer la investigación</Link></li><li><Link to="/es/personal_agency/education">Persiga su educación</Link></li><li><Link to="/es/personal_agency/volunteer">Voluntario/a!</Link></li><li><Link to="/es/personal_agency/business">Considere iniciar su propio negocio o servicio</Link></li><li><Link to="/es/personal_agency/parallel">Persecuciones paralelas</Link></li><li><Link to="/es/personal_agency/transactions">Es más probable que las transacciones me consigan un trabajo en el menor tiempo posible</Link></li><li><Link to="/es/personal_agency/online">Cree una presencia en línea viable</Link></li><li><Link to="/es/personal_agency/interview">Prepárese para su entrevista de trabajo</Link></li></ul><li><Link to="/es/references">Referencias</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Conozca sus talentos</h1>

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


<Link className="back_link" to="/es/who_am_i/values">De regreso: Valores en el trabajo y la vida</Link><Link className="next_link" to="/es/who_am_i/passion_and_interests">Siguiente página: Pasiones e intereses</Link>
    </div>


  </Layout>
)

export default SecondPage
