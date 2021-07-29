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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">test</Link></li><ul><li><Link to="/ht/who_am_i/values">test</Link></li><li><Link to="/ht/who_am_i/know_your_talents">test</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1>Ask these questions:</h1>
<ul>
<li><h2>Where is there a gap in services in my community?</h2></li>
<li><h2>Where is there work that others have rejected, or not yet recognized as valuable?&nbsp;</h2></li>
<li><h2>What kind of services do I have the capacity and interest in fulfilling?</h2></li>
<li><h2>Who is the ideal audience to benefit from these services?&nbsp;</h2></li>
<li><h2>Gather the data needed to explore this new service. Test these ideas with a small audience of supportive friends and colleagues. Listen closely to their input and suggestions.&nbsp;</h2></li>
<li><h2>Identify small next steps and timeline to implement this service.&nbsp;</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3>"<i>I had to make my own living and my own opportunity. But I made it! Don't sit down and wait for the opportunities to come. Get up and make them."</i>&nbsp;</h3>
<h3><i>- Madam C.J. Walker</i></h3>
</div>
<p></p>


<Link className="back_link" to="/ht/personal_agency/volunteer">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/parallel">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
