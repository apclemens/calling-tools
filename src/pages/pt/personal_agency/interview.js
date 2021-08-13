import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Ferramentas de Chamada"
    image="map.jpg"
    language="pt"
  >
    <Seo
      title="Prepare-se para sua entrevista de emprego"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/interview">English</Link><Link to="/fr/personal_agency/interview">Français</Link><Link to="/es/personal_agency/interview">Español</Link><Link to="/ht/personal_agency/interview">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/interview">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li>Prepare-se para sua entrevista de emprego</li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Prepare-se para sua entrevista de emprego</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h2>A seguir, são apresentadas perguntas básicas que você deve estar preparado para responder (elas serão feitas de várias maneiras) antes de entrar em sua entrevista de emprego.
&nbsp;</h2>
<h2><i>Pratique com um amigo antepadamente!</i></h2>
<ul>
<li aria-level="2">
<h2>Por quê você está aqui? Por que você estava interessado neste trabalho?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>O que você pode fazer por nós?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Que tipo de pessoa és tu?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>O que o distingue das muitas outras pessoas que se candidatam a este emprego?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Podemos pagar por você?&nbsp;</h2>
</li>
</ul>
<h2>Além disso, pesquise minuciosamente a organização e esteja preparado para responder cuidadosamente a alguns aspectos da missão e operações da organização.</h2>
<h2>Ir preparado com perguntas próprias também mostra a eles que você está pensando por si mesmo e tem algo a oferecer. Alguns exemplos a serem considerados:&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>O que esse trabalho envolve?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Quais são as habilidades que um funcionário importante nesse trabalho teria?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Conte-me sobre o ambiente do escritório e os tipos de pessoas com quem eu estaria trabalhando.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>O que meu supervisor espera de mim em termos de comunicação e relatórios sobre meu progresso diário ou semanal no trabalho?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Quando devo receber uma resposta sua sobre uma decisão?</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/pt/personal_agency/online">De volta a: Crie uma presença on-line viável</Link><Link className="next_link" to="/pt/references">Próxima página: Referências</Link>
    </div>


  </Layout>
)

export default SecondPage
