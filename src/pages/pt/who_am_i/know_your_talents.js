import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Ferramentas de Chamada"
    image="inventory.jpg"
    language="pt"
  >
    <Seo
      title="Conheça seus talentos"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"><Link to="/en/who_am_i/know_your_talents">English</Link><Link to="/fr/who_am_i/know_your_talents">Français</Link><Link to="/es/who_am_i/know_your_talents">Español</Link><Link to="/ht/who_am_i/know_your_talents">Krèyol ayisyen</Link><Link className="current" to="/pt/who_am_i/know_your_talents">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/pt/">O que está chamando?</Link></li><li><Link to="/pt/personal_well_being">Passo 1 Te cuide</Link></li><li><Link to="/pt/who_am_i/">Passo 2: Saiba quem você é</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">Conheça os seus valores de trabalho</Link></li><li>Conheça seus talentos</li><li><Link to="/pt/who_am_i/passion_and_interests">Paixões e interesses</Link></li></ul><li><Link to="/pt/personal_agency/">Passo 3: Assuma o controle</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">Desenvolver objetivos de vida e carreira</Link></li><li><Link to="/pt/personal_agency/mentor">Procure um mentor</Link></li><li><Link to="/pt/personal_agency/research">Faça a pesquisa!</Link></li><li><Link to="/pt/personal_agency/education">Prossiga sua educação</Link></li><li><Link to="/pt/personal_agency/volunteer">Voluntário!</Link></li><li><Link to="/pt/personal_agency/business">Considere iniciar seu próprio negócio ou serviço</Link></li><li><Link to="/pt/personal_agency/parallel">Perseguições Paralelas</Link></li><li><Link to="/pt/personal_agency/transactions">Cenários mais eficazes para conseguir o emprego</Link></li><li><Link to="/pt/personal_agency/online">Crie uma presença on-line viável</Link></li><li><Link to="/pt/personal_agency/interview">Prepare-se para sua entrevista de emprego</Link></li></ul><li><Link to="/pt/references">Referências</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Conheça seus talentos</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/night.jpg"
/>
</div>
<h1><span style={{fontWeight: 400}}>Presentes - Uma habilidade ou talento natural.
</span></h1>
<h1>Talentos - Aptidão ou habilidade natural.
</h1>
<h1>Pontos fortes - Uma qualidade ou atributo bom ou benéfico de uma pessoa.
</h1>
<h2><span style={{fontWeight: 400}}>Estar ciente de seus dons, talentos e pontos fortes ajuda a identificar um melhor "ajuste" para uma carreira de sucesso. Ao mesmo tempo, é importante estar aberto ao crescimento e ao aprendizado em novas áreas que ainda não desenvolvemos, abrindo novas janelas de oportunidade.
</span></h2>
<h2>Teste seus presentes com estas ferramentas on-line (principalmente gratuitas):
</h2>
<h2><a target="_blank" rel="noreferrer" href="http://www.self-directed-search.com/"><span style={{fontWeight: 400}}>http://www.self-directed-search.com/</span></a></h2>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>O melhor trabalho, a melhor carreira, para você, aquele que o torna mais feliz e realizado, será aquele que usará: suas habilidades transferíveis favoritas, em suas matérias, campos ou conhecimentos especiais favoritos, em um trabalho que oferece a você seu ambiente pessoal preferido, suas condições de trabalho preferidas, com seu salário preferido ou outras recompensas, trabalhando em prol de suas metas e valores preferidos.&rdquo;&nbsp;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Richard N. Bolles, que cor é o seu paraquedas?</span></h3>
</div>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Devemos acreditar que somos dotados de alguma coisa, e que essa coisa, a qualquer custo, deve ser alcançada.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Marie Curie</span></h3>
</div>


<Link className="back_link" to="/pt/who_am_i/values">De volta a: Conheça os seus valores de trabalho</Link><Link className="next_link" to="/pt/who_am_i/passion_and_interests">Próxima página: Paixões e interesses</Link>
    </div>


  </Layout>
)

export default SecondPage
