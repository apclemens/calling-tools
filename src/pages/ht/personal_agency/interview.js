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
      title="Prepare w pou entèvyou travay la"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link to="/en/personal_agency/interview">English</Link><Link to="/fr/personal_agency/interview">Français</Link><Link to="/es/personal_agency/interview">Español</Link><Link className="current" to="/ht/personal_agency/interview">Krèyol ayisyen</Link><Link to="/pt/personal_agency/interview">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">Etap 2: Konnen kiyès ou ye</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/who_am_i/values">Valè nan travay ak lavi</Link></li><li><Link to="/ht/who_am_i/know_your_talents">Konnen talan ou yo</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">Pasyon ak enterè</Link></li></ul><li><Link to="/ht/personal_agency/">Etap 4: Pran chaj</Link></li><ul style={{display: 'none'}}><li><Link to="/ht/personal_agency/goals">Devlope objektif lavi ak karyè</Link></li><li><Link to="/ht/personal_agency/mentor">Chèche yon konseye</Link></li><li><Link to="/ht/personal_agency/research">Fè rechèch ou</Link></li><li><Link to="/ht/personal_agency/education">Kouri dèyè edikasyon ou</Link></li><li><Link to="/ht/personal_agency/volunteer">Volontè!</Link></li><li><Link to="/ht/personal_agency/business">Konsidere w kòmanse pwòp biznis ou oswa sèvis</Link></li><li><Link to="/ht/personal_agency/parallel">Pouswit Paralèl</Link></li><li><Link to="/ht/personal_agency/transactions">Sèn ki pi bon pou jwenn travay la</Link></li><li><Link to="/ht/personal_agency/online">Kreye yon prezans solid an liy</Link></li><li>Prepare w pou entèvyou travay la</li></ul><li><Link to="/ht/references">Referans</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Prepare w pou entèvyou travay la</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h2>Apre sa yo se kesyon de baz ou ta dwe prepare pou reponn (yo pral mande w yo nan plizyè fason) anvan ou ale nan entèvyou travay la.&nbsp;</h2>
<h2><i>Pratike ak yon zanmi avan dat la rive!</i></h2>
<ul>
<li aria-level="2">
<h2>Poukisa ou isit la? Poukisa ou te enterese nan travay sa a?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Kisa ou ka fè pou nou?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Ki kalite moun ou ye?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Ki sa ki diferansye ou ak anpil lòt moun ki aplike pou travay sa a?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Èske nou ka peye ou?&nbsp;</h2>
</li>
</ul>
<h2>Anplis de sa, byen fè rechèch sou òganizasyon an, epi prepare w pou reponn ak kèk pwen aspè nan misyon ak operasyon òganizasyon an.</h2>
<h2>Prepare w ak kesyon pa w pou w montre yo tou ke ou ka panse pou tèt ou ak ou gen bagay pou w ofri. Kèk egzanp pou konsidere:&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>Ki sa travay sa enplike?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ki kapasite yon anplwaye nan travay sa a ta genyen?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Pale m de anviwònman biwo ak kalite moun mwen t’ap travay.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Ki sa sipèvizè mwen an ap atann de mwen an tèm de kominikasyon ak rapòte pou tounen sou pwogrè travay chak jou pou mwen oswa chak semèn?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Kilè mwen ta dwe espere tande pale de ou sou yon desizyon?</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/ht/personal_agency/online">Retounen nan: Kreye yon prezans solid an liy</Link><Link className="next_link" to="/ht/references">Paj kap vini an: Referans</Link>
    </div>


  </Layout>
)

export default SecondPage
