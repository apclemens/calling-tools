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
<div><ul><li><Link to="/es/">test</Link></li><li><Link to="/es/personal_well_being">test</Link></li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li>test</li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/rocks.jpg"
/>
</div>
<h1>¡Tu currículum ya está disponible!
</h1>
<h2><i>Los gerentes de contratación te buscarán en línea. Construir un perfil positivo y profesionalmente atractivo en línea obtendrá la atención que necesitas para perseguir tu llamado/vocación. Algunas ideas para considerar:
</i></h2>
<ul>
<li>
<h3><i>Cuando prepares el contenido para internet, hazte las siguientes preguntas: ¿Quién eres tú? ¿Qué te hace especial? ¿Por qué debería importarle a alguien?
</i></h3>
</li><li>
<h3>Asegúrate de que todos tus perfiles en línea se presenten de manera que causen una impresión positiva en un posible empleador. Ponte en el lugar del empleador: ¿Tu imagen en línea muestra el tipo de personaje que les gustaría para trabajar en su organización?
</h3>
</li><li>
<h3>Crea una foto profesional para usar en todas las plataformas digitales.
</h3>
</li><li>
<h3>Inicia un blog personal para compartir tus ideas y experiencias que se pueden difundir a través de Facebook, Twitter, LinkedIn, etc. El contenido personal también se puede almacenar en Brandyourself.com y About.me.
</h3>
</li><li>
<h3>Inicia un sitio web para promocionar tu trabajo como artista, fotógrafo, etc.
</h3>
</li><li>
<h3>Desarrolle tu plataforma profesional en LinkdIn, que puede brindarte muchas conexiones, como "personas puente" para presentarte una empresa o una red. Asegúrate de que tu perfil esté actualizado y es claro y específico sobre el tipo de trabajo que estás buscando.
</h3>
</li><li>
<h3>Incluya referencia a tus perfiles en línea en tu currículum.
</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<h3>Crea un currículum y una carta de presentación que atraerán la atención con estas útiles plantillas.
</h3>
<h3>&nbsp;</h3>
<h3>Publica tu currículum en los sitios de trabajo más utilizados (si vives en los EE. UU. O Canadá), ¡y podrás recibir algunas respuestas! Recuerda utilizar palabras clave que identifiquen el tipo de trabajo que estás buscando, que probablemente corresponderá a las empresas que buscan tu tipo de habilidades e intereses.
</h3>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Indeed.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Livecareer.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Ziprecruiter.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Idealist.org</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Readyjob.org</span></p>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>"La huella digital es la primera impresión entre los candidatos para el trabajo y las personas que trabajan en la empresa. El contenido 24/7 sirve como preludio del primer apretón de manos o contacto visual directo en la cartera de reclutamiento de talentos."&nbsp;</i></h3>
<h3><i>--Marti Konstant, </i><i>activa tu carrera ágil</i></h3>
</div>


<Link className="back_link" to="/es/personal_agency/transactions">Back to: test</Link><Link className="next_link" to="/es/personal_agency/interview">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
