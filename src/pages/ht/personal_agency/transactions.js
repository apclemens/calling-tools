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
      title="test"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 1 Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

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


<Link className="back_link" to="/ht/personal_agency/parallel">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/online">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
