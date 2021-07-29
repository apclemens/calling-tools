import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Rele Zouti"
    image="inventory.jpg"
    language="ht"
  >
    <Seo
      title="test"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">test</Link></li><ul><li><Link to="/ht/who_am_i/values">test</Link></li><li>test</li><li><Link to="/ht/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/night.jpg"
/>
</div>
<h1><span style={{fontWeight: 400}}>Konnen talan ou yo</span><span style={{fontWeight: 400}}><br /></span></h1>
<h1><span style={{fontWeight: 400}}>Kado - Yon kapasite natirèl oswa talan.</span></h1>
<h1>Talan - Natirèl aptitid oswa konpetans.</h1>
<h1>Fòs - Yon kalite oswa yon bon atribi oswa benefik de yon moun.
</h1>
<h2><span style={{fontWeight: 400}}>Lè ou konsyan de don w yo, talan w yo ak fòs ou sa ede yo idantifye yon meyѐ "adekwasyon" pou yon karyè ki reyisi. An menm tan, li enpòtan pou ou ouvѐ nan kwayans ak nan aprantisaj nan nouvo domѐn ke nou poko devlope, ouvѐ nouvo fenèt opòtinite.
</span></h2>
<h2>Teste kado ou yo ak zouti sou entènèt sa yo (sitou gratis):
</h2>
<h2><a target="_blank" rel="noreferrer" href="http://www.self-directed-search.com/"><span style={{fontWeight: 400}}>http://www.self-directed-search.com/</span></a></h2>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Pi bon travay, pi bon karyè, pou ou, sa ki rann ou pi kontan ak epanouyi ak sa kap itilize a: tansfere konpetans ou yo, sijè ou pi pito yo, jaden, domѐn oswa yon konesans espesyal, ou pi pito nan yon travay kew ofri anviwònman imen ou pi pito a, kondisyon travay ou pi pito  a e salѐ oswa lòt rekonpans ou pi pito nan travay nan objektif ou pi pito yo ak apresye.&rdquo;&nbsp;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Richard N. Bolles, What Color is Your Parachute?</span></h3>
</div>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>Nou dwe kwè ke nou gen don pou yon bagay, e ke bagay sa a, nan kèlkeswa pri yo, yo dwe rive.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Marie Curie</span></h3>
</div>


<Link className="back_link" to="/ht/who_am_i/values">Back to: test</Link><Link className="next_link" to="/ht/who_am_i/passion_and_interests">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
