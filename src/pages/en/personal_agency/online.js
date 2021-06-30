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
      title="Create a Viable Online Presence"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Create a Viable Online Presence</h1>

<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/rocks.jpg"
/>
</div>
<h1><b>Your resume is already out there!</b></h1>
<h1><b><i>Hiring managers will look you up online. Building a positive and professionally attractive profile online will get the attention you need to pursue your calling. Some ideas to consider:&nbsp;</i></b></h1>
<h3><b>&nbsp;</b></h3>
<h3><b><i>--When preparing&nbsp;online content, ask yourself the questions: Who are you? What makes you special? Why should anyone care?&nbsp;</i></b></h3>
<h3><b><i>--E</i></b><b>nsure that all your online profiles present themselves in a way that will make a positive impression on a potential employer. Put yourself in the employer&rsquo;s shoes: Does your online image display the kind of character they would want to work in their organization?</b></h3>
<h3><b>--Create a professional photo to be use across all digital platforms.&nbsp;</b></h3>
<h3><b>--Start a personal blog to share your ideas and experiences that can be&nbsp;spread through Facebook, Twitter, LinkedIn, etc. Personal content can also be stored at Brandyourself.com and About.me.</b></h3>
<h3><b>--Start a website to promote your work as an artist, photographer, etc.&nbsp;</b></h3>
<h3><b><i>--Develop your professional platform on LinkdIn</i></b><b> which can give you many connections, such as &ldquo;bridge people&rdquo; to introduce you to a company or a network. Make sure your profile is up to date, and is clear and specific about what kind of job you&rsquo;re looking for.</b></h3>
<h3><b>--Include reference to your online presence in your resume.</b></h3>
<p><span style={{fontWeight: 400}}>&nbsp;</span></p>
<h3><b>Build a resume and cover letter that will attract attention with these </b><a target="_blank" rel="noreferrer" href="https://resumegenius.com/resume-templates"><b>useful templates</b></a><b>&nbsp;</b></h3>
<h3><b>&nbsp;</b></h3>
<h3><b><i>Post your resume</i></b><b> at the most commonly used job sites (if you're living in the U.S. or Canada), and you may get some responses! Remember to use key words identifying the kind of work you&rsquo;re looking for, which will more likely be matched by companies looking for your kind of skills and interests.</b></h3>
<p><span style={{fontWeight: 400}}>Indeed.com</span></p>
<p><span style={{fontWeight: 400}}>Livecareer.com</span></p>
<p><span style={{fontWeight: 400}}>Ziprecruiter.com</span></p>
<p><span style={{fontWeight: 400}}>Idealist.org</span></p>
<p><span style={{fontWeight: 400}}>Readyjob.org</span></p>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><b><i>"The digital footprint is the first impression between job candidates and people working within the company. The 24/7 content serves as a prelude to the first handshake or direct eye contact in the talent recruitment pipeline."&nbsp;</i></b></h3>
<h3><b><i>--Marti Konstant, </i></b><b><i>Activate your Agile Career</i></b></h3>
</div>

    </div>

  </Layout>
)

export default SecondPage
