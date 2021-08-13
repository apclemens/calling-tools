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
      title="Pouswit Paralèl"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/parallel">English</Link><Link to="/fr/personal_agency/parallel">Français</Link><Link to="/es/personal_agency/parallel">Español</Link><Link className="current" to="/ht/personal_agency/parallel">Krèyol ayisyen</Link><Link to="/pt/personal_agency/parallel">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li><Link to="/ht/personal_agency/education">Kouri dèyè edikasyon ou</Link></li><li><Link to="/ht/personal_agency/volunteer">Volontè!</Link></li><li><Link to="/ht/personal_agency/business">Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link></li><li>Pouswit Paralèl</li><li><Link to="/ht/personal_agency/transactions">Sèn ki pi bon pou jwenn travay la</Link></li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li><Link to="/ht/personal_agency/interview">Prepare w pou entèvyou travay la</Link></li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Pouswit Paralèl</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/drawing.jpg"
/>
</div>
<h2>Si kounya karyè ou pa nouri pasyon ou (menm jan li peye bòdwo yo), kouri dèyè enterè kote ki fè nouri pasyon ou yo ka ba ou yon sans pi pwofon nan satisfaksyon, ak pèmèt ou jwi domèn ou enterese yo plis.&nbsp;</h2>
<h2>Fason yo pouswiv enterè paralèl:&nbsp;</h2>
<ul>
<li><h2>Kouri pi lwen edikasyon - Swiv yon sèl kou nan domèn ou enterese a ka mete ou an kontak ak pwofesè ak lòt elèv ki ka vin fè pati rezo sipò ou a.</h2></li>
<li><h2>Pran sou pwojè Ekip ou an ofri w bagay an plis pandan w’ap montre talan ou "deyò" ak kreye dosye. Nan menm direksyon (nan nenpòt zòn enteresan) ka elaji chwa ou yo ak kreye lòt avni pou yon travay ki gen sans. "konvèti ekonomi an", ap grandi ak plis opòtinite yo afiche chak jou. Jwenn zòn ou enterese a  ak telechaje aplikasyon nan tèt ansanm pou plis enfòmasyon.</h2></li>
<li><h2>Ofri pou elaji wòl ou nan travay pou enkli enterè ou. Eksplore ki opsyon ki disponib ak pwosesis la rive la.</h2></li>
</ul>


<Link className="back_link" to="/ht/personal_agency/business">Retounen nan: Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link><Link className="next_link" to="/ht/personal_agency/transactions">Paj kap vini an: Sèn ki pi bon pou jwenn travay la</Link>
    </div>


  </Layout>
)

export default SecondPage
