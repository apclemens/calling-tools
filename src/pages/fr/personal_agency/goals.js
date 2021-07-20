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
      title="Développez des objectifs de vie et de carrière"
      defaultTitle="Outils d'Appel"
      lang="fr"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/fr/">Qu'est-ce que l'appel?</Link></li><li><Link to="/fr/personal_well_being">Étape 1: Prenez Soin de Vous</Link></li><li><Link to="/fr/who_am_i/">Étape 2: Sachez qui vous êtes</Link></li><ul><li><Link to="/fr/who_am_i/values">Explorez vos valeurs familiales envers le travail</Link></li><li><Link to="/fr/who_am_i/know_your_talents">Découvrez ce qui est le plus important pour vous</Link></li><li><Link to="/fr/who_am_i/passion_and_interests">Passions et Intérêts</Link></li></ul><li><Link to="/fr/personal_agency/">Étape 3: Prenez les choses en main</Link></li><ul><li>Développez des objectifs de vie et de carrière</li><li><Link to="/fr/personal_agency/mentor">Cherchez un mentor</Link></li><li><Link to="/fr/personal_agency/research">Faites la recherche!</Link></li><li><Link to="/fr/personal_agency/education">Poursuivez vos études</Link></li><li><Link to="/fr/personal_agency/volunteer">Bénévole!</Link></li><li><Link to="/fr/personal_agency/business">Envisagez de créer votre propre entreprise ou service</Link></li><li><Link to="/fr/personal_agency/parallel">Poursuites parallèles</Link></li><li><Link to="/fr/personal_agency/transactions">Scénarios les plus efficaces pour obtenir le poste</Link></li><li><Link to="/fr/personal_agency/online">Créez une présence en ligne viable</Link></li><li><Link to="/fr/personal_agency/interview">Préparez votre entretien d'embauche</Link></li></ul><li><Link to="/fr/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Développez des objectifs de vie et de carrière</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h2>Décidez de ce que vous voulez le plus et fixez-vous des objectifs pour transformer vos rêves en réalité. Planifiez pleinement vos objectifs.</h2>
<ul>
<li aria-level="3">
<h3>Notez les principaux domaines de votre vie sous forme de titres, chacun sur une page séparée. Voici quelques exemples de domaines:</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Aventures / Voyage</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Carrière</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Communauté</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Éducation / Étude / Développement professionnel</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Famille / Mariage</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Finances</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Amis / relations</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Santé / Forme physique / Sports</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Aider les autres / Philanthropie / Service</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Loisirs</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Domicile</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Croissance personnelle</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Politique</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Lecture</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Retraite</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Spirituel / Foi</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Créez des objectifs mesurables pour chacun, y compris un calendrier.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Dressez la liste des étapes souhaitées et des mesures à prendre.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Consultez souvent votre liste d'objectifs pour les gérer et les mettre en œuvre en temps opportun.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Enregistrez tous les indices de carrière qui vous viennent à l'esprit pendant le processus de mise en œuvre des objectifs dans tous les aspects de votre vie.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<div className="quote">
<h3><i><span style={{fontWeight: 400}}>&ldquo;L'une des leçons avec lesquelles j'ai grandi était de toujours rester fidèle à soi-même et de ne jamais laisser ce que quelqu'un dit vous distraire de vos objectifs.&rdquo;&nbsp;</span></i></h3>
<h3><i><span style={{fontWeight: 400}}>--Michelle Obama</span></i></h3>
</div>


<Link className="back_link" to="/fr/personal_agency/">Retour à: Étape 3: Prenez les choses en main</Link><Link className="next_link" to="/fr/personal_agency/mentor">Page suivante: Cherchez un mentor</Link>
    </div>


  </Layout>
)

export default SecondPage
