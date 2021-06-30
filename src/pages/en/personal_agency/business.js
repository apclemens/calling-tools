import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Calling Tools"
    image="map.jpg"
    language="en"
  >
    <Seo
      title="Consider Starting your own Business or Service"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Consider Starting your own Business or Service</h1>

<h1><b>Consider starting your own business or service&nbsp;</b></h1>
<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/art.jpg"
/>
</div>
<h1><b>Ask these questions:</b></h1>
<ul>
<li><h2><b>Where is there a gap in services in my community?</b></h2></li>
<li><h2><b>Where is there work that others have rejected, or not yet recognized as valuable?&nbsp;</b></h2></li>
<li><h2><b>What kind of services do I have the capacity and interest in fulfilling?</b></h2></li>
<li><h2><b>Who is the ideal audience to benefit from these services?&nbsp;</b></h2></li>
<li><h2><b>Gather the data needed to explore this new service. Test these ideas with a small audience of supportive friends and colleagues. Listen closely to their input and suggestions.&nbsp;</b></h2></li>
<li><h2><b>Identify small next steps and timeline to implement this service.&nbsp;</b></h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><b>"</b><b><i>I had to make my own living and my own opportunity. But I made it! Don't sit down and wait for the opportunities to come. Get up and make them."</i></b><b>&nbsp;</b></h3>
<h3><b><i>- Madam C.J. Walker</i></b></h3>
</div>
<p></p>

    </div>

  </Layout>
)

export default SecondPage
