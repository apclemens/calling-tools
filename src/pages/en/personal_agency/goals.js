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
      title="Develop Life and Career Goals"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Develop Life and Career Goals</h1>

<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h1>Decide what you want most and set goals to turn your dreams into reality. Plan your goals fully.&nbsp;</h1>
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

    </div>

  </Layout>
)

export default SecondPage
