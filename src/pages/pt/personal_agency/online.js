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
      title="Crie uma presença on-line viável"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/online">English</Link><Link to="/fr/personal_agency/online">Français</Link><Link to="/es/personal_agency/online">Español</Link><Link to="/ht/personal_agency/online">Krèyol ayisyen</Link><Link className="current" to="/pt/personal_agency/online">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li><Link to="/pt/who_am_i/know_your_talents">Conheça seus talentos</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li>Crie uma presença on-line viável</li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Crie uma presença on-line viável</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/rocks.jpg"
/>
</div>
<h1>Seu currículo já está lá fora!</h1>
<h2><i>Os gerentes de contratação procurarão você on-line. Construir um perfil on-line positivo e profissionalmente atraente receberá a atenção de que você precisa para continuar sua chamada. Algumas idéias a considerar:&nbsp;</i></h2>
<ul>
<li>
<h3><i>Ao preparar o conteúdo on-line, faça a si mesmo as perguntas: quem é você? O que te faz especial? Por que alguém deveria se importar?&nbsp;</i></h3>
</li><li>
<h3>Verifique se todos os seus perfis on-line se apresentam de maneira a causar uma impressão positiva em um potencial empregador. Coloque-se no lugar do empregador: sua imagem on-line exibe o tipo de personagem que eles gostariam de trabalhar em sua organização?</h3>
</li><li>
<h3>Crie uma foto profissional para ser usada em todas as plataformas digitais.&nbsp;</h3>
</li><li>
<h3>Inicie um blog pessoal para compartilhar suas idéias e experiências que podem ser espalhadas pelo Facebook, Twitter, LinkedIn etc. O conteúdo pessoal também pode ser armazenado em Brandyourself.com e About.me.</h3>
</li><li>
<h3>Crie um site para promover seu trabalho como artista, fotógrafo, etc.&nbsp;</h3>
</li><li>
<h3>Desenvolva sua plataforma profissional no LinkdIn, que pode oferecer muitas conexões, como “conector” para apresentá-lo a uma empresa ou rede. Verifique se o seu perfil está atualizado e é claro e específico sobre o tipo de trabalho que você está procurando.</h3>
</li><li>
<h3>Inclua referência à sua presença online em seu currículo.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<h3><a target="_blank" rel="noreferrer" href="https://resumegenius.com/resume-templates">Crie um currículo e uma carta de apresentação que atrairão atenção com esses modelos úteis</a>&nbsp;</h3>
<h3>&nbsp;</h3>
<h3>Publique seu currículo nos locais de trabalho mais usados ​​(se você mora nos EUA ou no Canadá) e poderá receber algumas respostas! Lembre-se de usar palavras-chave para identificar o tipo de trabalho que você está procurando, o que provavelmente corresponderá às empresas que procuram seu tipo de habilidades e interesses.</h3>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Indeed.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Livecareer.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Ziprecruiter.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Idealist.org</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Readyjob.org</span></p>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>"A pagina digital é a primeira impressão entre candidatos a emprego e pessoas que trabalham na empresa. O conteúdo 24 horas por dia, 7 dias por semana, serve de prelúdio para o primeiro aperto de mão ou contato visual direto na linha de recrutamento de talentos."&nbsp;</i></h3>
<h3><i>--Marti Konstant, </i><i>ative sua carreira ágil</i></h3>
</div>


<Link className="back_link" to="/pt/personal_agency/transactions">De volta a: Cenários mais eficazes para conseguir o emprego</Link><Link className="next_link" to="/pt/personal_agency/interview">Próxima página: Prepare-se para sua entrevista de emprego</Link>
    </div>


  </Layout>
)

export default SecondPage
