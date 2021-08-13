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
      title="Konsidere w kòmanse pwòp biznis ou oswa sèvis"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/business">English</Link><Link to="/fr/personal_agency/business">Français</Link><Link to="/es/personal_agency/business">Español</Link><Link className="current" to="/ht/personal_agency/business">Krèyol ayisyen</Link><Link to="/pt/personal_agency/business">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li><Link to="/ht/personal_agency/education">Kouri dèyè edikasyon ou</Link></li><li><Link to="/ht/personal_agency/volunteer">Volontè!</Link></li><li>Konsidere w kòmanse pwòp biznis ou oswa sèvis</li><li><Link to="/ht/personal_agency/parallel">Pouswit Paralèl</Link></li><li><Link to="/ht/personal_agency/transactions">Sèn ki pi bon pou jwenn travay la</Link></li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li><Link to="/ht/personal_agency/interview">Prepare w pou entèvyou travay la</Link></li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Konsidere w kòmanse pwòp biznis ou oswa sèvis</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1>Poze kesyon sa yo:</h1>
<ul>
<li><h2>Kote gen yon espas nan sèvis nan kominote mwen an?</h2></li>
<li><h2>Ki kote gen yon travay ke lòt moun te rejte, oswa ki poko rekonèt kòm yon travay enpòtan?&nbsp;</h2></li>
<li><h2>Ki kalite sèvis mwen gen kapasite ak enterè nan ranpli?</h2></li>
<li><h2>Ki moun ki odyans lan ideyal benefisye de sèvis sa yo?&nbsp;</h2></li>
<li><h2>Rasanble done ki nesesè pou eksplore nouvo sèvis sa a. Teste ide sa yo ak yon ti odyans nan zanmi ki bay sipò ak kòlèg li yo. Koute byen opinyon yo ak sijesyon yo.&nbsp;</h2></li>
<li><h2>Idantifye ti pwochen etap ak delè pou aplike sèvis sa a.&nbsp;</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3>"<i>Mwen te fè pwòp vi mwen ak pwòp opòtinite mwen. Men, mwen te echwe! Pa chita ap tann pou opòtinite yo vini. Leve epi fè yo."</i>&nbsp;</h3>
<h3><i>- Madam C.J. Walker</i></h3>
</div>
<p></p>


<Link className="back_link" to="/ht/personal_agency/volunteer">Retounen nan: Volontè!</Link><Link className="next_link" to="/ht/personal_agency/parallel">Paj kap vini an: Pouswit Paralèl</Link>
    </div>


  </Layout>
)

export default SecondPage
