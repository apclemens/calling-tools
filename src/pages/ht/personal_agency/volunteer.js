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
      title="Volontè!"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/volunteer">English</Link><Link to="/fr/personal_agency/volunteer">Français</Link><Link to="/es/personal_agency/volunteer">Español</Link><Link className="current" to="/ht/personal_agency/volunteer">Krèyol ayisyen</Link><Link to="/pt/personal_agency/volunteer">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li><Link to="/ht/personal_agency/education">Kouri dèyè edikasyon ou</Link></li><li>Volontè!</li><li><Link to="/ht/personal_agency/business">Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link></li><li><Link to="/ht/personal_agency/parallel">Pouswit Paralèl</Link></li><li><Link to="/ht/personal_agency/transactions">Sèn ki pi bon pou jwenn travay la</Link></li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li><Link to="/ht/personal_agency/interview">Prepare w pou entèvyou travay la</Link></li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Volontè!</h1>

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


<Link className="back_link" to="/ht/personal_agency/education">Retounen nan: Kouri dèyè edikasyon ou</Link><Link className="next_link" to="/ht/personal_agency/business">Paj kap vini an: Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link>
    </div>


  </Layout>
)

export default SecondPage
