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
      title="Kouri dèyè edikasyon ou"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/education">English</Link><Link to="/fr/personal_agency/education">Français</Link><Link to="/es/personal_agency/education">Español</Link><Link className="current" to="/ht/personal_agency/education">Krèyol ayisyen</Link><Link to="/pt/personal_agency/education">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li>Kouri dèyè edikasyon ou</li><li><Link to="/ht/personal_agency/volunteer">Volontè!</Link></li><li><Link to="/ht/personal_agency/business">Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link></li><li><Link to="/ht/personal_agency/parallel">Pouswit Paralèl</Link></li><li><Link to="/ht/personal_agency/transactions">Sèn ki pi bon pou jwenn travay la</Link></li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li><Link to="/ht/personal_agency/interview">Prepare w pou entèvyou travay la</Link></li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Kouri dèyè edikasyon ou</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/education.jpg"
/>
</div>
<h2>Kèlkeswa kote ou ye oswa nan ki sikonstans ou ye, plis opòtinite ap ouvri pou ou si ou pouswiv yon edikasyon, kit se yon diplòm oswa sètifikasyon.</h2>


<Link className="back_link" to="/ht/personal_agency/research">Retounen nan: Fè rechèch ou</Link><Link className="next_link" to="/ht/personal_agency/volunteer">Paj kap vini an: Volontè!</Link>
    </div>


  </Layout>
)

export default SecondPage
