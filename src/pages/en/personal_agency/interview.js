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
      title="Prepare for your Job Interview"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Prepare for your Job Interview</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h1>Following are basic questions you should be prepared to answer (they will be asked in a variety of ways) before going into your job interview.&nbsp;</h1>
<h1><i>Practice with a friend ahead of time!</i></h1>
<ul>
<li aria-level="2">
<h2>Why are you here? Why were you interested in this job?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>What can you do for us?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>What kind of person are you?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>What distinguishes you from the many other people who are applying for this job?&nbsp;</h2>
</li>
</ul>
<ul>
<li aria-level="2">
<h2>Can we afford you?&nbsp;</h2>
</li>
</ul>
<h2>In addition, thoroughly research the organization, and be prepared to respond thoughtfully to some aspects of the mission and operations of the organization.</h2>
<h2>Coming prepared with questions of your own also shows them that you are thinking for yourself and have something to offer. Some examples to consider:&nbsp;</h2>
<ul>
<li aria-level="3">
<h3>What does this job involve?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>What are the skills a top employee in this job would have to have?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Tell me about the office environment and the kinds of people I would be working with.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>What would my supervisor expect of me in terms of communication and reporting back on my daily or weekly work progress?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>When should I expect to hear back from you about a decision?</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/en/personal_agency/online">Back to: Create a Viable Online Presence</Link><Link className="next_link" to="/en/references">Next page: References</Link>
    </div>


  </Layout>
)

export default SecondPage
