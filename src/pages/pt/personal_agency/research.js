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
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul><li><Link to="/pt/who_am_i/values">test</Link></li><li><Link to="/pt/who_am_i/know_your_talents">test</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul><li><Link to="/pt/personal_agency/goals">test</Link></li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li>test</li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li><Link to="/pt/personal_agency/transactions">test</Link></li><li><Link to="/pt/personal_agency/online">test</Link></li><li><Link to="/pt/personal_agency/interview">test</Link></li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h2>If you&rsquo;re debating whether to move ahead in pursuit of a particular career or area of interest:&nbsp;</h2>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<ul>
<li aria-level="3">
<h3>Build your network of mentors and people working in your field of interest. They may include an acquaintance&nbsp;who is&nbsp;more experienced in the field, a younger person who is more familiar with current trends, a peer group where you can freely share challenges and accomplishments, knowledge specialists. Developing mentoring relationships is a life-long process, because it&rsquo;s these connections that will often help you make more connections!&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Develop a set of questions that you need to have answered.&nbsp;Shape your questions based on your own career values you have already identified (previous tab on this site). And remember, this isn&rsquo;t a job interview.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>What do they like about their work?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>What possibilities lie in that area of work?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>What would they recommend if you decide to pursue that area:&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Additional education?&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Volunteering experience?</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Develop a list of people who might be able to give you input into those questions. Do you know anyone who is already working in that career? Contact them for additional information.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Crowdsource feedback to&nbsp;your questions on social platforms such as Quora, Facebook, LinkedIn, Slack, etc.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Conduct interviews with people who are already in that career area, or people you admire.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Arrange a day of &ldquo;shadowing&rdquo; with someone who is in the career in question.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Create a &ldquo;<a target="_blank" rel="noreferrer" href="http://www.couragerenewal.org/PDFs/Parker-Palmer_Clearness-Committee.pdf">clearness committee</a>&rdquo; or &ldquo;personal advisory board&rdquo; of friends who are willing to meet with you periodically, to advise you and help you assess your options. This may include peers, younger workers, senior leaders, or thought leaders in your area of career interest.</h3>
</li>
</ul>
<p></p>
<p></p>


<Link className="back_link" to="/pt/personal_agency/mentor">Back to: test</Link><Link className="next_link" to="/pt/personal_agency/education">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
