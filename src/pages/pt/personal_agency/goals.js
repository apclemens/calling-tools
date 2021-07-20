import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Ferramentas de Chamada"
    image="map.jpg"
    language="pt"
  >
    <Seo
      title="test"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul><li><Link to="/pt/who_am_i/values">test</Link></li><li><Link to="/pt/who_am_i/know_your_talents">test</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul><li>test</li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li><Link to="/pt/personal_agency/research">test</Link></li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li><Link to="/pt/personal_agency/transactions">test</Link></li><li><Link to="/pt/personal_agency/online">test</Link></li><li><Link to="/pt/personal_agency/interview">test</Link></li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h2>Decide what you want most and set goals to turn your dreams into reality. Plan your goals fully.&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>Write down major areas of your life as headings each on a separate page. Below are some example areas:</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Adventures/Travel</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Career</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Community</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Education/Study/Professional development</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Family/Marriage</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Finances</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Friends/Relationships</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Health/Fitness/Sports</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Helping others/Philanthropy/Service</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Hobbies</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Home</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Personal growth</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Politics</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Reading</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Retirement</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Spiritual/Faith</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Create measurable goals for each, including a timeline.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>List the milestones desired, and action required.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Visit your goals list often, to manage and implement in a timely manner.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Record any career clues that come to mind during the process of implementing goals in all aspects of your life.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<div className="quote">
<h3><i><span style={{fontWeight: 400}}>&ldquo;One of the lessons that I grew up with was to always stay true to yourself and never let what somebody says distract you from your goals.&rdquo;&nbsp;</span></i></h3>
<h3><i><span style={{fontWeight: 400}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --Michelle Obama</span></i></h3>
</div>


<Link className="back_link" to="/pt/personal_agency/">Back to: test</Link><Link className="next_link" to="/pt/personal_agency/mentor">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
