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
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">test</Link></li><li><Link to="/pt/who_am_i/know_your_talents">test</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">test</Link></li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li><Link to="/pt/personal_agency/research">test</Link></li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li>test</li><li><Link to="/pt/personal_agency/online">test</Link></li><li><Link to="/pt/personal_agency/interview">test</Link></li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/trees.jpg"
/>
</div>
<h2>Listed from <i>most likely</i> to the <i>least likely</i> to get the job most quickly:&nbsp;</h2>
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


<Link className="back_link" to="/pt/personal_agency/parallel">Back to: test</Link><Link className="next_link" to="/pt/personal_agency/online">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
