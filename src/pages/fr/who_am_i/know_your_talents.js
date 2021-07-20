import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Outils d'Appel"
    image="inventory.jpg"
    language="fr"
  >
    <Seo
      title="Découvrez ce qui est le plus important pour vous"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li>Découvrez ce qui est le plus important pour vous</li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul><li><Link to="/fr/personal_agency/goals">Développez des objectifs de vie et de carrière</Link></li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Découvrez ce qui est le plus important pour vous</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/night.jpg"
/>
</div>
<h1><span style={{fontWeight: 400}}>Connaissez vos talents</span><span style={{fontWeight: 400}}><br /></span></h1>
<h1>Dons - Une capacité ou un talent naturel.</h1>
<h1>TalentsAptitude ou compétence naturelle.</h1>
<h1>Forces - Une qualité bonne ou avantageuse, ou un atout d'une personne.</h1>
<h2><span style={{fontWeight: 400}}>Connaître vos dons, vos talents et vos forces aide à identifier une meilleure adaptation pour une carrière réussie. En même temps, il est important d'être ouvert à l’évolution et à l'apprentissage dans de nouveaux domaines que nous n'avons peut-être pas encore développés, ouvrant ainsi de nouvelles perspectives.</span></h2>
<h2>Testez vos dons avec ces outils en ligne (pour la plupart gratuits):</h2>
<h2><a target="_blank" rel="noreferrer" href="http://www.self-directed-search.com/"><span style={{fontWeight: 400}}>http://www.self-directed-search.com/</span></a></h2>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Le meilleur travail, la meilleure carrière, pour vous, celui qui vous rend le plus heureux et le plus épanoui, va être celui qui utilise : vos compétences transférables préférées, dans vos matières, domaines ou connaissances spéciales favoris, dans un travail qui vous offre votre environnement humain préféré, vos conditions de travail préférées, avec votre salaire préféré ou d'autres récompenses, en travaillant à la réalisation de vos objectifs et valeurs préférés.&rdquo;&nbsp;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Richard N. Bolles, de quelle couleur est votre parachute?</span></h3>
</div>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Nous devons croire que nous sommes doués pour quelque chose, et que cette chose, à n’importe quel prix, doit être atteinte.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Marie Curie</span></h3>
</div>


<Link className="back_link" to="/fr/who_am_i/values">Retour à: Explorez vos valeurs familiales envers le travail</Link><Link className="next_link" to="/fr/who_am_i/passion_and_interests">Page suivante: Passions et Intérêts</Link>
    </div>


  </Layout>
)

export default SecondPage
