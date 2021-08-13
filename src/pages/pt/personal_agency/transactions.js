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
      title="Cenários mais eficazes para conseguir o emprego"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/transactions">English</Link><Link to="/fr/personal_agency/transactions">Français</Link><Link to="/es/personal_agency/transactions">Español</Link><Link to="/ht/personal_agency/transactions">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/transactions">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li>Cenários mais eficazes para conseguir o emprego</li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Cenários mais eficazes para conseguir o emprego</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h2>Listados do mais provável para o menos provável de obter o trabalho mais rapidamente:&nbsp;</h2>
<p><br /></p>
<ul>
<li aria-level="3">
<h3>Seu amigo é dono da empresa e acha que você se encaixa perfeitamente.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você já está na empresa e está sendo preparado para avançar.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você tem uma forte conexão com alguém na liderança da empresa que está pronto para fazer as conexões para você.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Os gerentes de contratação estão procurando você porque você parece ter as qualificações certas.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Alguém que você conhece na organização fornece conexões.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você fez muita pesquisa na empresa, possui um excelente currículo adequado aos interesses deles e uma poderosa carta de apresentação direcionada à pessoa certa.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você publica seu currículo cuidadosamente criado on-line, em vários sites de recrutamento, com palavras-chave para capturar uma organização com uma abertura que corresponda aos seus interesses. Procure ativamente várias aberturas por dia.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você envia seu currículo para uma empresa com uma carta de apresentação genérica.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Você assiste filmes no seu computador o dia todo e espera que o trabalho o encontre.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/pt/personal_agency/parallel">De volta a: Perseguições Paralelas</Link><Link className="next_link" to="/pt/personal_agency/online">Próxima página: Crie uma presença on-line viável</Link>
    </div>


  </Layout>
)

export default SecondPage
