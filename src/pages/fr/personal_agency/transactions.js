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
      title="Scénarios les plus efficaces pour obtenir le poste"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/transactions">English</Link><Link className="current" to="/fr/personal_agency/transactions">Français</Link><Link to="/es/personal_agency/transactions">Español</Link><Link to="/ht/personal_agency/transactions">Krèyol ayisyen</Link><Link to="/pt/personal_agency/transactions">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul style={{display: 'none'}}><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li>Scénarios les plus efficaces pour obtenir le poste</li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">Les références</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Scénarios les plus efficaces pour obtenir le poste</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h2>Classés du plus susceptible au moins susceptible d'obtenir l'emploi le plus rapidement:&nbsp;</h2>
<p><br /></p>
<ul>
<li aria-level="3">
<h3>Votre ami est propriétaire de l'entreprise et pense que vous seriez un bon partenaire.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous êtes déjà dans l'entreprise et vous êtes en train de préparer votre promotion.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous avez un lien solide avec une personne à la tête de l'entreprise qui est prête à établir les connexions pour vous.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Les responsables du recrutement vous recherchent parce que vous semblez avoir les bonnes qualifications.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Une personne que vous connaissez au sein de l'organisation fournit des connexions.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous avez fait beaucoup de recherches sur l’entreprise, vous avez un excellent CV qui correspond à ses intérêts et une lettre de motivation percutante adressée à la bonne personne.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous publiez votre CV soigneusement conçu en ligne, dans plusieurs sites de recrutement, avec des mots clés pour capturer une organisation avec une ouverture qui correspond à vos intérêts. Poursuivre activement plusieurs ouvertures chaque jour.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous envoyez votre CV à une entreprise avec une lettre de motivation générique.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vous regardez des films sur votre ordinateur toute la journée et espérez que le travail vous trouvera.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/fr/personal_agency/parallel">Retour à: Poursuites parallèles</Link><Link className="next_link" to="/fr/personal_agency/online">Page suivante: Créez une présence en ligne viable</Link>
    </div>


  </Layout>
)

export default SecondPage
