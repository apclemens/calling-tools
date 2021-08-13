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
      title="Procure um mentor"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/mentor">English</Link><Link to="/fr/personal_agency/mentor">Français</Link><Link to="/es/personal_agency/mentor">Español</Link><Link to="/ht/personal_agency/mentor">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/mentor">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li>Procure um mentor</li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Procure um mentor</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/hana.jpg"
/>
</div>
<h2>Um mentor é um conselheiro ou guia confiável. Um mentor pode compartilhar com um mentorado informações sobre sua própria carreira, além de fornecer orientação, motivação, apoio emocional e modelagem de papéis. Um mentor pode ajudar a explorar carreiras, estabelecer metas, desenvolver contatos e identificar recursos.</h2>
<h3>Um bom mentor possui as seguintes qualidades:
</h3>
<ul>
<li aria-level="3">
<h3>Disposição para compartilhar habilidades e conhecimentos. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Demonstra uma atitude positiva e atua como um modelo positivo. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Tem interesse pessoal no relacionamento de orientação. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Demonstra entusiasmo no campo. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Valoriza o aprendizado contínuo e o crescimento no campo.</h3>
</li>
</ul>
<h3>Benefícios de ter um mentor:&nbsp;</h3>
<ol>
<li>
<h3>Conselho: O maior benefício de ter um mentor é ter alguém com quem você possa fazer perguntas e obter conselhos. Os mentores podem compartilhar uma riqueza de sabedoria e discernimento sobre as melhores práticas no local de trabalho, protocolos e comportamentos adequados.</h3>
</li><li>
<h3>Rede: formar um relacionamento com um mentor abre portas para outros grupos. Isso lhe dará a oportunidade de fazer apresentações pessoais aos contactos do seu mentor, o que pode levar anos para ser estabelecido.</h3>
</li><li>
<h3>Incentivo: Você pode descrever um mentor como líder de suporte profissional para sua carreira. É provável que o seu mentor tenha experimentado sucessos e desafios semelhantes que você encontrará no início de sua carreira. Ao compartilhar como eles superaram seus desafios, os mentores podem encorajá-lo a alcançar a linha de chegada e continuar perseguindo seus objetivos.</h3>
</li><li>
<h3>Perspectiva: Através de suas diversas experiências, os mentores podem oferecer uma perspectiva e visão diferentes da sua. Eles farão perguntas que talvez não lhe ocorram, mas são igualmente importantes para resolver um problema ou planejar sua carreira.</h3>
</li><li>
<h3>Sentimentos reduzidos de isolamento: ter alguém fora do seu ambiente de trabalho direto com o qual você possa fazer perguntas, trocar idéias e confiar, ajudará a criar um senso de parceria entre pares que nem sempre está disponível no seu local de trabalho.</h3>
</li><li>
<h3>Responsabilidade: Um bom mentor fornecerá um uma pergunta e resposta honesta e responsabilizará seus objetivos de carreira.</h3>
</li><li>
<h3>Planejamento de carreira: como mentoreado, você pode sentar-se com seu mentor para definir metas de longo prazo e planejar estrategicamente os próximos passos para alcançar seus objetivos de carreira.</h3>
</li><li>
<h3>Confiança e desenvolvimento de talentos: Um mentor com experiência em seu campo poderá identificar seus pontos fortes e talentos e oferecer sugestões sobre como você pode desenvolvê-los e crescer profissionalmente. Isso é garantido para aumentar sua confiança e desempenho no trabalho!</h3>
</li>
</ol>
<p></p>


<Link className="back_link" to="/pt/personal_agency/goals">De volta a: Desenvolver objetivos de vida e carreira</Link><Link className="next_link" to="/pt/personal_agency/research">Próxima página: Faça a pesquisa!</Link>
    </div>


  </Layout>
)

export default SecondPage
