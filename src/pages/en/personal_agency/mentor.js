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
      title="Seek a Mentor"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Seek a Mentor</h1>

<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/hana.jpg"
/>
</div>
<h1><b>A mentor is a trusted counselor or guide. A&nbsp;mentor&nbsp;may share with a mentee (or protege) information about his or her own career path, as well as provide guidance, motivation, emotional support, and role modeling. A&nbsp;mentor&nbsp;may help with exploring careers, setting goals, developing contacts, and identifying resources.</b></h1>
<h3><b>A good mentor possesses the following qualities:</b></h3>
<ul>
<li aria-level="3">
<h3><b>Willingness to share skills, knowledge, and expertise. ...</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Demonstrates a positive attitude and acts as a positive role model. ...</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Takes a personal interest in the mentoring relationship. ...</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Exhibits enthusiasm in the field. ...</b></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><b>Values ongoing learning and growth in the field.</b></h3>
</li>
</ul>
<h3><b>Benefits of having a mentor:&nbsp;</b></h3>
<h3><b>1.&nbsp;Advice:&nbsp;The biggest benefit of having a mentor is&nbsp;</b><b>having someone you can ask questions</b><b>&nbsp;and get advice from. Mentors can share a wealth of wisdom and insight on best practices in the work place, protocols and appropriate behaviours.</b></h3>
<h3><b>2.&nbsp;Networking: Forming a relationship with a mentor&nbsp;</b><b>opens doors to other groups.&nbsp;</b><b>It will give you the opportunity to get personal introductions to your mentor&rsquo;s contacts which may have taken your mentor years to establish.</b></h3>
<h3><b>3.&nbsp;Encouragement: You could describe a mentor as a&nbsp;</b><b>professional cheerleader for your career.</b><b>&nbsp;It is likely that your mentor has experienced similar successes and challenges that you will encounter at the start of your career. By sharing how they overcame their challenges, mentors can&nbsp;</b><b>encourage you to reach the finish line</b><b>&nbsp;and to keep pursuing your goals.</b></h3>
<h3><b>4.&nbsp;Perspective:&nbsp;&nbsp;Through their diverse experiences,&nbsp;</b><b>mentors may offer a perspective and vision&nbsp;</b><b>that is different to your own.&nbsp; They will ask questions that may not occur to you, but are as critically important for solving a problem or planning your career.</b></h3>
<h3><b>5.&nbsp;Reduced feelings of isolation:&nbsp;Having someone outside of your direct working environment that you can ask questions, bounce ideas with and confide in, will help to create&nbsp;</b><b>a sense of peer partnership&nbsp;</b><b>that may not always be available in your workplace.</b></h3>
<h3><b>6.&nbsp;Accountability:&nbsp;A good mentor will provide you with honest feedback and&nbsp;</b><b>hold you accountable t</b><b>o your career goals.</b></h3>
<h3><b>7. Career planning:&nbsp;&nbsp;As a mentee, you can sit down with your mentor to set long term goals and&nbsp;</b><b>strategically plan out the next steps</b><b>&nbsp;to reach your career objectives.</b></h3>
<h3><b>8. Confidence and talent development:&nbsp;&nbsp;A mentor who has expertise in your field will be able to</b><b>&nbsp;identify your strengths and talents and offer suggestions on how you can further develop them&nbsp;</b><b>and grow professionally. This is guaranteed to boost your confidence and work performance!</b></h3>
<p></p>

    </div>

  </Layout>
)

export default SecondPage
