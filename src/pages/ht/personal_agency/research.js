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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 1 Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h2>Si w ap debat opòtinite pou avanse epi pou pouswit yon karyè oubyen nan yon domèn ou enterese patikilyèman:&nbsp;</h2>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<ul>
<li aria-level="3">
<h3>Bati rezo nan konseye moun k ap travay nan domèn ou enterese yo. Li ka antre yon zanmi ki gen plis eksperyans nan domèn nan, yon moun ki pi jèn ki konn tandans domèn nan, yon gwoup kanmarad kote ou ka pataje libète ak reyisit ki difisil, kèk espesyalis nan konesans yo. Devlope konsèy relasyonèl yo se yon pwosesis ki dire tout lavi, epi yo se koneksyon ki ap ede ou souvan pouw jwenn plis koneksyon!&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Devlope yon seri kesyon ou bezwen reponn. Fòme kesyon ou yo ki baze sou pwòp karyè valè ou te deja idantifye (tab anvan sou sit sa a). Epi sonje, sa a se pa yon entèvyou travay.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ki sa yo renmen nan travay yo?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ki posiblite ki genyen nan zòn travay sa a?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kisa yo ta rekòmande si ou deside pouswiv zòn sa a:&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Edikasyon adisyonèl?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Volontè eksperyans?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Devlope yon lis moun ki ta ka ba ou opinyon nan kesyon sa yo. Ou konnen nenpòt moun ki deja ap travay nan karyè sa a? Kontakte yo pou plis enfòmasyon.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Reyaji sou kesyon ou yo sou rezo sosyal tankou Quora, Facebook, LinkedIn, kanson, elatriye.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Fè entèvyou ak moun ki deja nan zòn karyè sa a, oswa moun ou admire.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Fè aranjman pou yon jou nan "lonbraj" ak yon moun ki nan karyè nan kesyon an.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kreye yon &ldquo;<a target="_blank" rel="noreferrer" href="http://www.couragerenewal.org/PDFs/Parker-Palmer_Clearness-Committee.pdf">komite klarifikasyon</a>&rdquo; oswa "komite konsèy pèsonèl" nan zanmi ki vle rankontre avèk ou detanzantan, pou fè ou konnen epi ede ou evalye opsyon ou yo. Sa ka enkli kamarad klas, pi piti travayè yo, ansyen lidè yo, oswa lidè panse nan zòn ou nan enterè karyè.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/ht/personal_agency/mentor">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/education">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
