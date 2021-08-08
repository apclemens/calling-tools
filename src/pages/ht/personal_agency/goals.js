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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 1 Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li>test</li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h2>Deside de sa ou plis vle epi fikse objektif ou pou transfòme rèv ou yo an reyalite. Planifye objektif ou yo konplètman.&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>Ekri pi gwo zòn nan lavi ou kòm yon tit chak nan yon paj apa. Anba a gen kèk domèn egzanp:</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Avanti / vwayaj</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Karyè</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kominote</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Edikasyon / Etid / Devlopman Pwofesyonèl</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Fanmi / Maryaj</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Finans</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Zanmi / Relasyon</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Sante / Fòm / Espò</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ede lòt moun / filantropik / Sèvis</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Jwèt</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kay</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kwasans pèsonèl</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Politik</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Lekti</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Retrèt</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Espirityèl / Lafwa</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kreye objektif yo avèk mezi pou chak, moun ki gen ladan yo avèk tout yon delè.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ekri direksyon yo ak aksyon ki nesesè yo.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Vizite lis objektif ou souvan, pou jere epi aplike nan yon mannyè apwopriye.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ekri nenpòt ki endikasyon karyè ki vin nan lide pandan pwosesis la nan mete ann aplikasyon objektif nan tout aspè nan lavi ou.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<div className="quote">
<h3><i><span style={{fontWeight: 400}}>&ldquo;Youn nan leson ke mwen grandi avè sete toujou rete fidèl avèk pwòp tèt mwen epi pa janm kite sa yon moun te di sou ou distrè w de objektif ou yo.&rdquo;&nbsp;</span></i></h3>
<h3><i><span style={{fontWeight: 400}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --Michelle Obama</span></i></h3>
</div>


<Link className="back_link" to="/ht/personal_agency/">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/mentor">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
