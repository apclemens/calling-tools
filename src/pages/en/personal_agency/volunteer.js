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
      title="Volunteer!"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"><Link className="current" to="/en/personal_agency/volunteer">English</Link><Link to="/fr/personal_agency/volunteer">Français</Link><Link to="/es/personal_agency/volunteer">Español</Link><Link to="/ht/personal_agency/volunteer">Krèyol ayisyen</Link><Link to="/pt/personal_agency/volunteer">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><ul style={{display: 'none'}}><li><Link to="/en/who_am_i/values">Values in Work and Life</Link></li><li><Link to="/en/who_am_i/know_your_talents">Know Your Talents</Link></li><li><Link to="/en/who_am_i/passion_and_interests">Passions and Interests</Link></li></ul><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><ul style={{display: 'none'}}><li><Link to="/en/personal_agency/goals">Develop Life and Career Goals</Link></li><li><Link to="/en/personal_agency/mentor">Seek a Mentor</Link></li><li><Link to="/en/personal_agency/research">Do the Research</Link></li><li><Link to="/en/personal_agency/education">Pursue your Education</Link></li><li>Volunteer!</li><li><Link to="/en/personal_agency/business">Consider Starting your own Business or Service</Link></li><li><Link to="/en/personal_agency/parallel">Parallel Pursuits</Link></li><li><Link to="/en/personal_agency/transactions">Transactions most likely to get me a job in the quickest amount of time</Link></li><li><Link to="/en/personal_agency/online">Create a Viable Online Presence</Link></li><li><Link to="/en/personal_agency/interview">Prepare for your Job Interview</Link></li></ul><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Volunteer!</h1>

<h2>Volunteer in an organization that is in line with your interests. You're more likely to identify your next steps or "calling" sooner by doing something (even when not getting paid) rather than sitting at home doing nothing.</h2>
<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/volunteer.jpg"
/>
</div>
<ul>
<li><h2>Gives you an opportunity to learn more about your field of interest, build practical skills and cultivate opportunities.</h2></li>
<li><h2>Helps you gain more work experience.</h2></li>
<li><h2>Broadens your network of connections.</h2></li>
<li><h2>The supervisor or other colleagues can provide you with a job reference.</h2></li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;Everybody can be great...because anybody can serve. You don't have to have a college degree to serve. You don't have to make your subject and verb&nbsp;agree to serve. You only need a heart full of grace. A soul&nbsp;generated by love.&rdquo;&nbsp;&nbsp;</i></h3>
<h3><i>--Martin Luther King, Jr.</i></h3>
</div>
<p></p>


<Link className="back_link" to="/en/personal_agency/education">Back to: Pursue your Education</Link><Link className="next_link" to="/en/personal_agency/business">Next page: Consider Starting your own Business or Service</Link>
    </div>


  </Layout>
)

export default SecondPage
