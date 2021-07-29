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
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul><li><Link to="/pt/who_am_i/values">test</Link></li><li><Link to="/pt/who_am_i/know_your_talents">test</Link></li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul><li><Link to="/pt/personal_agency/goals">test</Link></li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li><Link to="/pt/personal_agency/research">test</Link></li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li><Link to="/pt/personal_agency/transactions">test</Link></li><li>test</li><li><Link to="/pt/personal_agency/interview">test</Link></li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/rocks.jpg"
/>
</div>
<h1>Your resume is already out there!</h1>
<h2><i>Hiring managers will look you up online. Building a positive and professionally attractive profile online will get the attention you need to pursue your calling. Some ideas to consider:&nbsp;</i></h2>
<ul>
<li>
<h3><i>When preparing&nbsp;online content, ask yourself the questions: Who are you? What makes you special? Why should anyone care?&nbsp;</i></h3>
</li><li>
<h3>Ensure that all your online profiles present themselves in a way that will make a positive impression on a potential employer. Put yourself in the employer&rsquo;s shoes: Does your online image display the kind of character they would want to work in their organization?</h3>
</li><li>
<h3>Create a professional photo to be use across all digital platforms.&nbsp;</h3>
</li><li>
<h3>Start a personal blog to share your ideas and experiences that can be&nbsp;spread through Facebook, Twitter, LinkedIn, etc. Personal content can also be stored at Brandyourself.com and About.me.</h3>
</li><li>
<h3>Start a website to promote your work as an artist, photographer, etc.&nbsp;</h3>
</li><li>
<h3><i>Develop your professional platform on LinkdIn</i> which can give you many connections, such as &ldquo;bridge people&rdquo; to introduce you to a company or a network. Make sure your profile is up to date, and is clear and specific about what kind of job you&rsquo;re looking for.</h3>
</li><li>
<h3>Include reference to your online presence in your resume.</h3>
</li>
</ul>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<h3>Build a resume and cover letter that will attract attention with these <a target="_blank" rel="noreferrer" href="https://resumegenius.com/resume-templates">useful templates</a>&nbsp;</h3>
<h3>&nbsp;</h3>
<h3><i>Post your resume</i> at the most commonly used job sites (if you're living in the U.S. or Canada), and you may get some responses! Remember to use key words identifying the kind of work you&rsquo;re looking for, which will more likely be matched by companies looking for your kind of skills and interests.</h3>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Indeed.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Livecareer.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Ziprecruiter.com</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Idealist.org</span></p>
<p style={{marginBottom: 0}}><span style={{fontWeight: 400}}>Readyjob.org</span></p>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>"The digital footprint is the first impression between job candidates and people working within the company. The 24/7 content serves as a prelude to the first handshake or direct eye contact in the talent recruitment pipeline."&nbsp;</i></h3>
<h3><i>--Marti Konstant, </i><i>Activate your Agile Career</i></h3>
</div>


<Link className="back_link" to="/pt/personal_agency/transactions">Back to: test</Link><Link className="next_link" to="/pt/personal_agency/interview">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
