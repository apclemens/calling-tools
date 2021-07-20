import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Herramientas de Llamada"
    image="rest.jpg"
    language="es"
  >
    <Seo
      title="test"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../images/rest.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/es/">test</Link></li><li>test</li><li><Link to="/es/who_am_i/">test</Link></li><ul><li><Link to="/es/who_am_i/values">test</Link></li><li><Link to="/es/who_am_i/know_your_talents">test</Link></li><li><Link to="/es/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/es/personal_agency/">test</Link></li><ul><li><Link to="/es/personal_agency/goals">test</Link></li><li><Link to="/es/personal_agency/mentor">test</Link></li><li><Link to="/es/personal_agency/research">test</Link></li><li><Link to="/es/personal_agency/education">test</Link></li><li><Link to="/es/personal_agency/volunteer">test</Link></li><li><Link to="/es/personal_agency/business">test</Link></li><li><Link to="/es/personal_agency/parallel">test</Link></li><li><Link to="/es/personal_agency/transactions">test</Link></li><li><Link to="/es/personal_agency/online">test</Link></li><li><Link to="/es/personal_agency/interview">test</Link></li></ul><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "4.5rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../images/flowers.jpg"
/>
</div>
<h1>Cuídate&nbsp;<br /></h1>
<h2>Para perseguir una vocación significativa, es importante asegurarse de que estamos llegando a la búsqueda principalmente por una sensación de bienestar. El bienestar positivo tiene un vínculo claro con buenos resultados profesionales, que te equipan para poner tus ideas en acción.&nbsp;</h2>
<h2>Considera los siguientes temas que han demostrado que tienen impacto en el bienestar personal.</h2>
<ul>
<li aria-level="3">
<h3>Descansar lo suficiente y comer alimentos saludables como sea posible. Estos proporcionan la base de una vida saludable, aunque a menudo se ignoran.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Mantenerse activo. El ejercicio diario (incluso cuando es una caminata para llegar a algún lugar) y el aire fresco (¡luz solar!) Ayudan a despejar el pensamiento y a dar una nueva perspectiva.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Conectar con las personas y la comunidad. Fomentar relaciones saludables y ser parte de una comunidad de apoyo que te alentará en tu vocación en la vida, aumenta la autoestima y brinda conexiones para un resultado profesional más exitoso</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Fomentar un sentido de gratitud. Tomar nota de todas las cosas por las que puedes estar agradecido cada día aumenta la sensación de optimismo. Ve este breve video en busca de inspiración.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Seguir aprendiendo. Desarrollar nuevos intereses o pasatiempos, leer buena literatura mantiene la mente activa.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Practicar disciplinas espirituales. La meditación matutina, la lectura, el diario, la oración y el ayuno, el llanto si es necesario (!), construye la calma interior y la preparación para enfrentar el día. "Echa todas tus preocupaciones sobre él, porque él se preocupa por ti". 1 Pedro 5: 7</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Dar. Alcanzar a ayudar a los demás con amabilidad aumenta nuestro sentido de autoestima</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Planificar con anticipación. Tener un buen sentido de estructura para la semana (lo que se puede lograr y está bajo tu control) ayuda a reducir la ansiedad de un día para otro.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Mantén expectativas razonables de ti mismo y alienta a tu comunidad de apoyo a hacer lo mismo.</h3>
</li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&nbsp;&ldquo;11 Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.
12 Entonces me invocaréis, e iréis y oraréis á mí, y yo os oiré:
13 Y me buscaréis y hallaréis, porque me buscaréis de todo vuestro corazón.&rdquo;</i></h3>
<h3><i>&#8212; Jeremías 29:11-13&nbsp;</i></h3>
</div>
<div className="quote">
<h3><i>&ldquo;Si quieres una vida plena, debes renunciar a cualquier adicción de confort que puedas tener, para no sacudir tu barca y evitar los sentimientos de miedo e incertidumbre que siempre son el compañero en los viajes fuera de la seguridad de la rutina diaria. Una vida apasionadamente vivida no siempre es cómoda. Ir por ello implica estar abierto a todo en la vida: las alegrías, las penas, lo mundano, así como la magia, las espléndidas victorias, las derrotas más despreciables&rdquo;&nbsp;</i></h3>
<h3><i>&#8212; Nicholas Lore, The Pathfinder</i><span style={{fontWeight: 400}}><br /></span></h3>
</div>
<p><br /><span style={{fontWeight: 400}}><br /></span></p>


<Link className="back_link" to="/es/">Back to: test</Link><Link className="next_link" to="/es/who_am_i/">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
