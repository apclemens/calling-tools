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
      title="Préparez votre entretien d'embauche"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li>Préparez votre entretien d'embauche</li></ul><li><Link to="/fr/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Préparez votre entretien d'embauche</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h2>Voici les questions de base auxquelles vous devez être prêt à répondre (elles vous seront posées de différentes manières) avant de vous presenter à votre entretien d'embauche.&nbsp;</h2>
<h2><i>Entrainez-vous avec un ami à l'avance!</i></h2>
<ul>
<li aria-level="2">
<h2>Pourquoi êtes-vous ici? Pourquoi vous êtes-vous intéressé à ce poste?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Que pouvez-vous faire pour nous?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Quel genre de personne êtes-vous?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Qu'est-ce qui vous distingue des nombreuses autres personnes qui postulent à cet emploi?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Pouvons-nous vous permettre?&nbsp;</h2>
</li>
</ul>
<h2>De plus, effectuez des recherches approfondies sur l'organisation et soyez prêt à répondre de manière réfléchie à certains aspects de la mission et des opérations de l'organisation.</h2>
<h2>Venir préparé avec vos propres questions montre également que vous pensez par vous-même et que vous avez quelque chose à offrir. Quelques exemples à considérer:&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>En quoi consiste ce travail?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Quelles sont les compétences que doit posséder un employé de haut niveau dans cet emploi?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Parlez-moi de l'environnement de bureau et du type de personnes avec qui je travaillerais.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Qu'attendrait mon superviseur de moi en termes de communication et de compte rendu sur mes progrès quotidiens ou hebdomadaires?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Quand devrais-je m'attendre à recevoir une réponse de votre part au sujet d'une décision?</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/fr/personal_agency/online">Retour à: Créez une présence en ligne viable</Link><Link className="next_link" to="/fr/references">Page suivante: test</Link>
    </div>


  </Layout>
)

export default SecondPage
