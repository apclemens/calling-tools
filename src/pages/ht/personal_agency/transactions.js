import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Rele Zouti"
    image="map.jpg"
    language="ht"
  >
    <Seo
      title="Sèn ki pi bon pou jwenn travay la"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/transactions">English</Link><Link to="/fr/personal_agency/transactions">Français</Link><Link to="/es/personal_agency/transactions">Español</Link><Link className="current" to="/ht/personal_agency/transactions">Krèyol ayisyen</Link><Link to="/pt/personal_agency/transactions">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li><Link to="/ht/personal_agency/education">Kouri dèyè edikasyon ou</Link></li><li><Link to="/ht/personal_agency/volunteer">Volontè!</Link></li><li><Link to="/ht/personal_agency/business">Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link></li><li><Link to="/ht/personal_agency/parallel">Pouswit Paralèl</Link></li><li>Sèn ki pi bon pou jwenn travay la</li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li><Link to="/ht/personal_agency/interview">Prepare w pou entèvyou travay la</Link></li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Sèn ki pi bon pou jwenn travay la</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h2>Fè lis kèk moun ki gen plis chans pou jwenn travay la pi vit:&nbsp;</h2>
<p><br /></p>
<ul>
<li aria-level="3">
<h3>Zanmi ou posede konpayi an epi l’ panse ou trè bon.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou deja nan konpayi an epi yo déjà pran swen w pou avansman.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou gen yon koneksyon fò ak yon moun nan lidèchip nan konpayi an se moun ki pare pou fè koneksyon yo pou ou.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Manadjè anplwaye yo ap chèche w ou soti paske ou sanble gen yon kalifikasyon ki dwat.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Yon moun ou konnen nan òganizasyon an ka ba w koneksyon.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou te fè anpil rechèch nan konpayi an, ou gen yon rezime ekselan ki adapte ak enterè yo a, ak yon lèt de kouvèti pwisan ki dirije avèk moun nan dwat.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou poste rezime ou an avèk atansyon sou entènèt la, nan plizyè sit rekritman, avèk mo kle pou kenbe yon òganizasyon ak yon ouvèti ki koresponn ak enterè ou yo. Aktivman pouswiv plizyè ouvèti chak jou.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou voye rezime w nan yon konpayi ki gen yon lèt kouvèti jenerik.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ou gade sinema sou òdinatè ou tout jounen an ak espere travay la jwenn ou.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/ht/personal_agency/parallel">Retounen nan: Pouswit Paralèl</Link><Link className="next_link" to="/ht/personal_agency/online">Paj kap vini an: Kreye yon prezans solid an liy</Link>
    </div>


  </Layout>
)

export default SecondPage
