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
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><ul><li><Link to="/en/who_am_i/values">Values in Work and Life</Link></li><li><Link to="/en/who_am_i/know_your_talents">Know Your Talents</Link></li><li><Link to="/en/who_am_i/passion_and_interests">Passions and Interests</Link></li></ul><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><ul><li><Link to="/en/personal_agency/goals">Develop Life and Career Goals</Link></li><li><Link to="/en/personal_agency/mentor">Seek a Mentor</Link></li><li><Link to="/en/personal_agency/research">Do the Research</Link></li><li><Link to="/en/personal_agency/education">Pursue your Education</Link></li><li><Link to="/en/personal_agency/volunteer">Volunteer!</Link></li><li>Consider Starting your own Business or Service</li><li><Link to="/en/personal_agency/parallel">Parallel Pursuits</Link></li><li><Link to="/en/personal_agency/transactions">Transactions most likely to get me a job in the quickest amount of time</Link></li><li><Link to="/en/personal_agency/online">Create a Viable Online Presence</Link></li><li><Link to="/en/personal_agency/interview">Prepare for your Job Interview</Link></li></ul><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Consider Starting your own Business or Service</h1>

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


<Link className="back_link" to="/en/personal_agency/volunteer">Back to: Volunteer!</Link><Link className="next_link" to="/en/personal_agency/parallel">Next page: Parallel Pursuits</Link>
    </div>


  </Layout>
)

export default SecondPage
