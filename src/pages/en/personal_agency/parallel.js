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
      title="Parallel Pursuits"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Parallel Pursuits</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/drawing.jpg"
/>
</div>
<h2>If your career doesn't currently feed your passion (even as it pays the bills), pursuing interests on the side that do feed your passions can give you a deeper sense of satisfaction, and allows you to further explore your&nbsp;field of interest.&nbsp;</h2>
<h2>Ways to pursue parallel interests:&nbsp;</h2>
<ul>
<li><h2>Pursue further education - taking even one&nbsp;class in your field of interest can put you in touch with professors and other students who may become part of your network of support.</h2></li>
<li><h2>Take&nbsp;on side projects to&nbsp;give you additional income while getting your talents "out there" and building your portfolio. Side gigs (in any area of interest) can expand your choices and create other avenues for meaningful work.&nbsp;The <a target="_blank" rel="noreferrer" href="https://www.thebalancesmb.com/job-facts-about-gig-economy-4138171">"gig economy" is growing</a>, and more opportunities are posted each day. Find your area of interest and download the appropriate gig app for further information.</h2></li>
<li><h2>Offer to expand your role at work to include your interests. Explore what options are available and the process to get there.</h2></li>
</ul>


<Link className="back_link" to="/en/personal_agency/business">Back to: Consider Starting your own Business or Service</Link><Link className="next_link" to="/en/personal_agency/transactions">Next page: Transactions most likely to get me a job in the quickest amount of time</Link>
    </div>


  </Layout>
)

export default SecondPage
