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

<h1 style={{fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Develop Life and Career Goals</h1>

<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/church.jpg"
/>
</div>
<h1><b>Decide what you want most and set goals to turn your dreams into reality. Plan your goals fully.&nbsp;</b></h1>
<ul>
<li aria-level="3">
<h3><b>Write down major areas of your life as headings each on a separate page. Below are some example areas:</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Adventures/Travel</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Career</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Community</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Education/Study/Professional development</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Family/Marriage</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Finances</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Friends/Relationships</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Health/Fitness/Sports</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Helping others/Philanthropy/Service</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Hobbies</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Home</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Personal growth</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Politics</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Reading</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Retirement</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Spiritual/Faith</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Create measurable goals for each, including a timeline.</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>List the milestones desired, and action required.</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Visit your goals list often, to manage and implement in a timely manner.</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Record any career clues that come to mind during the process of implementing goals in all aspects of your life.</b></h3>
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
