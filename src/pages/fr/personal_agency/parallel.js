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
      title="Poursuites parallèles"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li>Poursuites parallèles</li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Poursuites parallèles</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/drawing.jpg"
/>
</div>
<h2>Si votre carrière ne nourrit pas actuellement votre passion (même si elle paie les factures), poursuivre des intérêts du côté qui nourrit vos passions peut vous donner un sentiment de satisfaction plus profond et vous permet d'explorer davantage votre domaine d'intérêt.&nbsp;</h2>
<h2>Façons de poursuivre des intérêts parallèles:&nbsp;</h2>
<ul>
<li><h2>Poursuivez vos études - suivre ne serait-ce qu’un cours dans votre domaine d'intérêt peut vous mettre en contact avec des professeurs et d'autres étudiants qui pourraient faire partie de votre réseau de soutien.</h2></li>
<li><h2>Participez à des projets parallèles pour vous donner des revenus supplémentaires tout en faisant connaître vos talents et en construisant votre “portfolio”. Les projets parallèles (dans n'importe quel domaine d'intérêt) peuvent élargir vos choix et créer d'autres possibilités de travail intéressant. L 'économie des “gig”, se développe et de nouvelles opportunités sont affichées chaque jour. Trouvez votre domaine d'intérêt et téléchargez l'application de projet appropriée pour obtenir de plus amples informations.</h2></li>
<li><h2>Proposez d'élargir votre rôle au travail pour y inclure vos intérêts. Explorez les options disponibles et le processus pour y parvenir.</h2></li>
</ul>


<Link className="back_link" to="/fr/personal_agency/business">Retour à: Envisagez de créer votre propre entreprise ou service</Link><Link className="next_link" to="/fr/personal_agency/transactions">Page suivante: Scénarios les plus efficaces pour obtenir le poste</Link>
    </div>


  </Layout>
)

export default SecondPage
