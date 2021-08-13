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
      title="Voluntário!"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/volunteer">English</Link><Link to="/fr/personal_agency/volunteer">Français</Link><Link to="/es/personal_agency/volunteer">Español</Link><Link to="/ht/personal_agency/volunteer">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/volunteer">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li>Voluntário!</li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Voluntário!</h1>

<h2>Ofereça-se em uma organização que esteja de acordo com seus interesses. É mais provável que você identifique seus próximos passos ou "ligue" mais cedo fazendo algo (mesmo quando não é pago) em vez de ficar em casa sem fazer nada.</h2>
<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/volunteer.jpg"
/>
</div>
<ul>
<li><h2>Dá a você a oportunidade de aprender mais sobre seu campo de interesse, desenvolver habilidades práticas e cultivar oportunidades.</h2></li>
<li><h2>Ajuda você a obter mais experiência de trabalho.</h2></li>
<li><h2>Amplia sua rede de conexões.</h2></li>
<li><h2>supervisor ou outros colegas podem fornecer uma referência de trabalho.</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;Todo mundo pode ser ótimo ... porque qualquer um pode servir. Você não precisa ter um diploma universitário para servir. Você não precisa fazer com que o sujeito e o verbo concordem em servir. Você só precisa de um coração cheio de graça. Uma alma gerada pelo amor.&rdquo;&nbsp;&nbsp;</i></h3>
<h3><i>--Martin Luther King, Jr.</i></h3>
</div>
<p></p>


<Link className="back_link" to="/pt/personal_agency/education">De volta a: Prossiga sua educação</Link><Link className="next_link" to="/pt/personal_agency/business">Próxima página: Considere iniciar seu próprio negócio ou serviço</Link>
    </div>


  </Layout>
)

export default SecondPage
