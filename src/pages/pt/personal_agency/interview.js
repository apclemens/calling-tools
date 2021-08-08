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
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">test</Link></li><li><Link to="/pt/who_am_i/know_your_talents">test</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">test</Link></li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li><Link to="/pt/personal_agency/research">test</Link></li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li><Link to="/pt/personal_agency/transactions">test</Link></li><li><Link to="/pt/personal_agency/online">test</Link></li><li>test</li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/elephant.jpg"
/>
</div>
<h2>Following are basic questions you should be prepared to answer (they will be asked in a variety of ways) before going into your job interview.&nbsp;</h2>
<h2><i>Practice with a friend ahead of time!</i></h2>
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


<Link className="back_link" to="/pt/personal_agency/online">Back to: test</Link><Link className="next_link" to="/pt/references">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
