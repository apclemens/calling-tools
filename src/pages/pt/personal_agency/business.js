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
      title="Considere iniciar seu próprio negócio ou serviço"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/business">English</Link><Link to="/fr/personal_agency/business">Français</Link><Link to="/es/personal_agency/business">Español</Link><Link to="/ht/personal_agency/business">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/business">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li>Considere iniciar seu próprio negócio ou serviço</li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Considere iniciar seu próprio negócio ou serviço</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1>Faça estas perguntas:</h1>
<ul>
<li><h2>Onde há uma lacuna nos serviços em minha comunidade?</h2></li>
<li><h2>Onde há trabalho que outros rejeitaram ou ainda não reconheceram como valioso?&nbsp;</h2></li>
<li><h2>Que tipo de serviços tenho capacidade e interesse em cumprir?</h2></li>
<li><h2>Quem é o público ideal para se beneficiar desses serviços?&nbsp;</h2></li>
<li><h2>Reúna os dados necessários para explorar este novo serviço. Teste essas idéias com um pequeno público de amigos e colegas de apoio. Ouça atentamente as  sugestões deles.&nbsp;</h2></li>
<li><h2>Identifique as pequenas linha do tempo para próximas etapas e a para implementar este serviço.&nbsp;</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3>"<i>Eu tive que ganhar a vida e a minha própria oportunidade. Mas consegui! Não sente e espere as oportunidades chegarem. Levante-se e aproveite-as."</i>&nbsp;</h3>
<h3><i>- Senhora C.J. Walker</i></h3>
</div>
<p></p>


<Link className="back_link" to="/pt/personal_agency/volunteer">De volta a: Voluntário!</Link><Link className="next_link" to="/pt/personal_agency/parallel">Próxima página: Perseguições Paralelas</Link>
    </div>


  </Layout>
)

export default SecondPage
