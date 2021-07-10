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
      title="Transactions most likely to get me a job in the quickest amount of time"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Transactions most likely to get me a job in the quickest amount of time</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h1>Listed from <i>most likely</i> to the <i>least likely</i> to get the job most quickly:&nbsp;</h1>
<p><br /></p>
<ul>
<li aria-level="3">
<h3>Your friend owns the company and thinks you&rsquo;d be a great fit.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You&rsquo;re already in the company and being groomed for advancement.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You have a strong connection with someone in leadership in the company who is ready to make the connections for you.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Hiring managers are seeking you out because you seem to have the right qualifications.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Someone you know in the organization provides connections.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You&rsquo;ve done a lot of research into the company, you have an excellent resume that fits their interests, and a powerful cover letter directed to the right person.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You post your carefully crafted resume online, in several recruiting sites, with key words to capture an organization with an opening that matches your interests. Actively pursue several openings each day.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You send your resume to a company with a generic cover letter.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>You watch movies on your computer all day and hope the job finds you.</h3>
</li>
</ul>
<p></p>
<p></p>

    </div>

  </Layout>
)

export default SecondPage
