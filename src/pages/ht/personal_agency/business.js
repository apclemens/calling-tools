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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 1 Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

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


<Link className="back_link" to="/ht/personal_agency/volunteer">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/parallel">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
