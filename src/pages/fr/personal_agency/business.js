import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Outils d'Appel"
    image="map.jpg"
    language="fr"
  >
    <Seo
      title="Envisagez de créer votre propre entreprise ou service"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/business">English</Link><Link className="current" to="/fr/personal_agency/business">Français</Link><Link to="/es/personal_agency/business">Español</Link><Link to="/ht/personal_agency/business">Krèyol ayisyen</Link><Link to="/pt/personal_agency/business">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li>Envisagez de créer votre propre entreprise ou service</li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">Les références</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Envisagez de créer votre propre entreprise ou service</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1>Posez ces questions:</h1>
<ul>
<li><h2>Où y a-t-il une lacune dans les services de ma communauté?</h2></li>
<li><h2>Où y a-t-il un travail que d'autres ont rejeté ou qui n’est pas encore reconnu comme valable ?&nbsp;</h2></li>
<li><h2>Quels types de services ai-je la capacité et l'intérêt de fournir?</h2></li>
<li><h2>Quel est le public idéal pour bénéficier de ces services?&nbsp;</h2></li>
<li><h2>Rassemblez les données nécessaires pour explorer ce nouveau service. Testez ces idées avec un petit groupe d'amis et de collègues qui vous soutiennent. Écoutez attentivement leurs commentaires et suggestions.&nbsp;</h2></li>
<li><h2>Identifiez les prochaines étapes et le calendrier de mise en œuvre de ce service.&nbsp;</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3>"<i>Il fallait que je gagne ma vie et que j’aie ma propre chance. Mais je l'ai fait! Ne vous asseyez pas et n'attendez pas que les opportunités se présentent. Levez-vous et créez-les."</i>&nbsp;</h3>
<h3><i>- Madam C.J. Walker</i></h3>
</div>
<p></p>


<Link className="back_link" to="/fr/personal_agency/volunteer">Retour à: Bénévole!</Link><Link className="next_link" to="/fr/personal_agency/parallel">Page suivante: Poursuites parallèles</Link>
    </div>


  </Layout>
)

export default SecondPage
