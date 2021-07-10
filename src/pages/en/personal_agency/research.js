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
      title="Do the Research"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Do the Research</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/canyon2.jpg"
/>
</div>
<h1>If you&rsquo;re debating whether to move ahead in pursuit of a particular career or area of interest:&nbsp;</h1>
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

    </div>

  </Layout>
)

export default SecondPage
