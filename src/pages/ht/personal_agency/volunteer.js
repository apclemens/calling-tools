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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 1 Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<h2>Volontè nan yon òganizasyon ki nan liy ak ki enterese ou. Ou gen plis chans idantifye pwochèn etap ou oswa "gen apèl" pi bonè nan fè yon bagay (menm lè pa resevwa peye) olye ke ou chita lakay ou pap fè anyen.</h2>
<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/volunteer.jpg"
/>
</div>
<ul>
<li><h2>Ba tèt ou yon opòtinite pou w aprann plis nan domèn ou enterese a,nan bati kapasite pratik ak pou w jwenn kèk opòtinite.</h2></li>
<li><h2>Ede ou jwenn plis eksperyans travay.</h2></li>
<li><h2>Elaji rezo ou nan koneksyon.</h2></li>
<li><h2>Sipèvizè a oswa lòt kòlèg ki ka ba ou yon referans travay.</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;Tout moun ka ekstrawòdinè ... paske nenpòt moun ka sèvi. Ou pa bezwen gen yon diplòm kolèj pou w sèvi. Ou pa bezwen nan fè sijè ak vèb dakò pou sèvi. Ou sèlman bezwen yon kè plen  favè nan men Bondye. Yon nanm ki kreye ak lanmou.&rdquo;&nbsp;&nbsp;</i></h3>
<h3><i>--Martin Luther King, Jr.</i></h3>
</div>
<p></p>


<Link className="back_link" to="/ht/personal_agency/education">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/business">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
