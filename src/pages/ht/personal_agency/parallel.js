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
<div><ul><li><Link to="/ht/">Ki sa ki yon apèl?</Link></li><li><Link to="/ht/personal_well_being">Etap 1: Pran swen tet ou</Link></li><li><Link to="/ht/who_am_i/">test</Link></li><ul><li><Link to="/ht/who_am_i/values">test</Link></li><li><Link to="/ht/who_am_i/know_your_talents">test</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li><Link to="/ht/personal_agency/education">test</Link></li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

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


<Link className="back_link" to="/ht/personal_agency/business">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/transactions">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
