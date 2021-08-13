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
      title="Perseguições Paralelas"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/parallel">English</Link><Link to="/fr/personal_agency/parallel">Français</Link><Link to="/es/personal_agency/parallel">Español</Link><Link to="/ht/personal_agency/parallel">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/parallel">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li>Perseguições Paralelas</li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Perseguições Paralelas</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/drawing.jpg"
/>
</div>
<h2>Se sua carreira atualmente não alimenta sua paixão (mesmo que pague as contas), buscar interesses do lado que alimenta suas paixões pode lhe proporcionar uma sensação mais profunda de satisfação e permitir que você explore ainda mais seu campo de interesse.&nbsp;</h2>
<h2>Maneiras de buscar interesses paralelos:&nbsp;</h2>
<ul>
<li><h2>Prossiga com a educação - assistir a apenas uma aula em sua área de interesse pode colocar você em contato com professores e outros alunos que podem se tornar parte de sua rede de apoio.</h2></li>
<li><h2>Participe de projetos paralelos para obter uma renda adicional enquanto divulga seus talentos e cria seu arquivo. Demonstração secundárias (em qualquer área de interesse) podem expandir suas escolhas e criar outros caminhos para um trabalho significativo. A " demostrção da economia " está crescendo e mais oportunidades são publicadas a cada dia. Encontre sua área de interesse e faça o download do aplicativo apropriado para obter mais informações.</h2></li>
<li><h2>Ofereça-te para expandir sua função no trabalho para incluir seus interesses. Explore quais opções estão disponíveis e o processo para encontra-lá.</h2></li>
</ul>


<Link className="back_link" to="/pt/personal_agency/business">De volta a: Considere iniciar seu próprio negócio ou serviço</Link><Link className="next_link" to="/pt/personal_agency/transactions">Próxima página: Cenários mais eficazes para conseguir o emprego</Link>
    </div>


  </Layout>
)

export default SecondPage
