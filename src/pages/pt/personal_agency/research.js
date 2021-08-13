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
      title="Faça a pesquisa!"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/research">English</Link><Link to="/fr/personal_agency/research">Français</Link><Link to="/es/personal_agency/research">Español</Link><Link to="/ht/personal_agency/research">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/research">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li>Faça a pesquisa!</li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Faça a pesquisa!</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h2>Se você está pensando em seguir em frente em busca de uma carreira ou área de interesse específica:&nbsp;</h2>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<ul>
<li aria-level="3">
<h3>Crie sua rede de mentores e pessoas que trabalham em seu campo de interesse. Eles podem incluir um conhecido mais experiente no campo, um jovem mais familiarizado com as tendências atuais, um grupo de colegas onde você pode compartilhar livremente desafios e realizações, especialistas em conhecimento. O desenvolvimento de relacionamentos de mentoria é um processo por longo  tempo da vida, porque são essas conexões que geralmente o ajudarão a fazer mais conexões!&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Desenvolva um conjunto de perguntas que você precisa responder. Defina suas perguntas com base nos seus próprios valores de carreira que você já identificou (guia anterior deste pagina de internet). E lembre-se, isso não é uma entrevista de emprego.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Do que eles gostam no trabalho?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Que possibilidades existem nessa área de trabalho?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>O que eles recomendariam se você decidir seguir essa área:&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Educação adicional?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Experiência de voluntariado?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Desenvolva uma lista de pessoas que podem dar a você sugestões para essas perguntas. Você conhece alguém que já está trabalhando nessa carreira? Entre em contato com eles para obter informações adicionais.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Faça o crowdsourcing de feedback para suas perguntas em plataformas sociais como Quora, Facebook, LinkedIn, Slack etc.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Realize entrevistas com pessoas que já estão nessa área de carreira ou com pessoas que você admira.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Organize um dia de "sombreamento" com alguém que está na carreira em questão.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Crie um &ldquo;<a target="_blank" rel="noreferrer" href="http://www.couragerenewal.org/PDFs/Parker-Palmer_Clearness-Committee.pdf">comitê de transparência</a>&rdquo; ou um “conselho consultivo pessoal” de amigos que estejam dispostos a se reunir com você periodicamente, para aconselhá-lo e ajudá-lo a avaliar suas opções. Isso pode incluir colegas, trabalhadores mais jovens, líderes mais velhos de carreira  ou líderes de pensamento em sua área de interesse profissional.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/pt/personal_agency/mentor">De volta a: Procure um mentor</Link><Link className="next_link" to="/pt/personal_agency/education">Próxima página: Prossiga sua educação</Link>
    </div>


  </Layout>
)

export default SecondPage
