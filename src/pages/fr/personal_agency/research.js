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
      title="Faites la recherche!"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/research">English</Link><Link className="current" to="/fr/personal_agency/research">Français</Link><Link to="/es/personal_agency/research">Español</Link><Link to="/ht/personal_agency/research">Krèyol ayisyen</Link><Link to="/pt/personal_agency/research">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li>Faites la recherche!</li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">Les références</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Faites la recherche!</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h2>Si vous vous demandez si vous devez avancer dans la poursuite d'une carrière ou d'un domaine d'intérêt particulier:&nbsp;</h2>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<ul>
<li aria-level="3">
<h3>Construisez votre réseau de mentors et de personnes travaillant dans votre domaine d'intérêt. Il peut s’agir d’une connaissance plus expérimentée dans le domaine, d’une personne plus jeune qui connaît mieux les tendances actuelles, d’un groupe de pairs où vous pouvez partager librement vos défis et vos réalisations, de spécialistes du savoir. Le développement de relations de mentorat est un processus qui dure toute la vie, car ce sont ces relations qui vous aideront souvent à établir encore plus de liens!&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Élaborez une série de questions auxquelles vous devez répondre. Formez vos questions en fonction de vos propres valeurs professionnelles que vous avez déjà identifiées (onglet précédent sur ce site). Et rappelez-vous qu’il ne s’agit pas d’un entretien d'embauche.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Qu'est-ce qu'ils aiment dans leur travail?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Quelles sont les possibilités dans ce domaine de travail?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Que recommanderaient-ils si vous décidez de poursuivre dans ce domaine:&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Une formation complémentaire?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Une expérience de bénévolat?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Établissez une liste de personnes qui pourraient être en mesure de vous donner leur avis sur ces questions. Connaissez-vous quelqu'un qui travaille déjà dans ce domaine? Contactez-les pour obtenir des informations complémentaires.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Les reactions des personnes à vos questions sur les plateformes sociales telles que Quora, Facebook, LinkedIn, Slack, etc.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Réalisez des entretiens avec des personnes qui sont déjà dans ce domaine professionnel ou avec des personnes que vous admirez.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Organisez une journée «d'observation» avec quelqu'un qui est dans le domaine en question.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Créez un «comité de clarté» ou un «conseil consultatif personnel» composé d'amis qui sont prêts à vous rencontrer périodiquement, pour vous conseiller et vous aider à évaluer vos options. Il peut s'agir de pairs, de jeunes travailleurs, de hauts dirigeants ou de leaders d'opinion dans votre domaine d'intérêt professionnel.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/fr/personal_agency/mentor">Retour à: Cherchez un mentor</Link><Link className="next_link" to="/fr/personal_agency/education">Page suivante: Poursuivez vos études</Link>
    </div>


  </Layout>
)

export default SecondPage
