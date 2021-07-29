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
      title="Bénévole!"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li>Bénévole!</li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Bénévole!</h1>

<h2>Faites du bénévolat dans une organisation qui correspond à vos intérêts. Vous êtes plus susceptible d'identifier vos prochaines étapes ou votre «appel» rapidement en faisant quelque chose (même si vous n'êtes pas payé) plutôt que de rester assis à la maison à ne rien faire.</h2>
<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/volunteer.jpg"
/>
</div>
<ul>
<li><h2>Vous donne l'occasion d'en savoir plus sur votre domaine d'intérêt, de développer des compétences pratiques et de cultiver des opportunités.</h2></li>
<li><h2>Vous aide à acquérir une plus grande experience professionnelle.</h2></li>
<li><h2>Élargit votre réseau de relations.</h2></li>
<li><h2>Le superviseur ou d'autres collègues peuvent vous fournir une référence professionnelle.</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;Tout le monde peut accomplir de grandes choses... parce que tout le monde peut servir. Vous n'avez pas besoin d'un diplôme universitaire pour servir. Vous n'avez pas besoin d'accorder le verbe avec le sujet pour servir. Vous avez simplement besoin d'un coeur plein de grâce. D'une âme régénérée par l'amour.&rdquo;&nbsp;&nbsp;</i></h3>
<h3><i>--Martin Luther King, Jr.</i></h3>
</div>
<p></p>


<Link className="back_link" to="/fr/personal_agency/education">Retour à: Poursuivez vos études</Link><Link className="next_link" to="/fr/personal_agency/business">Page suivante: Envisagez de créer votre propre entreprise ou service</Link>
    </div>


  </Layout>
)

export default SecondPage
