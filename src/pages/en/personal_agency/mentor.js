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
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><ul style={{display: 'none'}}><li><Link to="/en/who_am_i/values">Values in Work and Life</Link></li><li><Link to="/en/who_am_i/know_your_talents">Know Your Talents</Link></li><li><Link to="/en/who_am_i/passion_and_interests">Passions and Interests</Link></li></ul><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><ul style={{display: 'none'}}><li><Link to="/en/personal_agency/goals">Develop Life and Career Goals</Link></li><li>Seek a Mentor</li><li><Link to="/en/personal_agency/research">Do the Research</Link></li><li><Link to="/en/personal_agency/education">Pursue your Education</Link></li><li><Link to="/en/personal_agency/volunteer">Volunteer!</Link></li><li><Link to="/en/personal_agency/business">Consider Starting your own Business or Service</Link></li><li><Link to="/en/personal_agency/parallel">Parallel Pursuits</Link></li><li><Link to="/en/personal_agency/transactions">Transactions most likely to get me a job in the quickest amount of time</Link></li><li><Link to="/en/personal_agency/online">Create a Viable Online Presence</Link></li><li><Link to="/en/personal_agency/interview">Prepare for your Job Interview</Link></li></ul><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Seek a Mentor</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/hana.jpg"
/>
</div>
<h2>A mentor is a trusted counselor or guide. A&nbsp;mentor&nbsp;may share with a mentee (or protege) information about his or her own career path, as well as provide guidance, motivation, emotional support, and role modeling. A&nbsp;mentor&nbsp;may help with exploring careers, setting goals, developing contacts, and identifying resources.</h2>
<h3>A good mentor possesses the following qualities:</h3>
<ul>
<li aria-level="3">
<h3>Willingness to share skills, knowledge, and expertise. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Demonstrates a positive attitude and acts as a positive role model. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Takes a personal interest in the mentoring relationship. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Exhibits enthusiasm in the field. ...</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Values ongoing learning and growth in the field.</h3>
</li>
</ul>
<h3>Benefits of having a mentor:&nbsp;</h3>
<ol>
<li>
<h3>Advice:&nbsp;The biggest benefit of having a mentor is&nbsp;having someone you can ask questions&nbsp;and get advice from. Mentors can share a wealth of wisdom and insight on best practices in the work place, protocols and appropriate behaviours.</h3>
</li><li>
<h3>Networking: Forming a relationship with a mentor&nbsp;opens doors to other groups.&nbsp;It will give you the opportunity to get personal introductions to your mentor&rsquo;s contacts which may have taken your mentor years to establish.</h3>
</li><li>
<h3>Encouragement: You could describe a mentor as a&nbsp;professional cheerleader for your career.&nbsp;It is likely that your mentor has experienced similar successes and challenges that you will encounter at the start of your career. By sharing how they overcame their challenges, mentors can&nbsp;encourage you to reach the finish line&nbsp;and to keep pursuing your goals.</h3>
</li><li>
<h3>Perspective:&nbsp;&nbsp;Through their diverse experiences,&nbsp;mentors may offer a perspective and vision&nbsp;that is different to your own.&nbsp; They will ask questions that may not occur to you, but are as critically important for solving a problem or planning your career.</h3>
</li><li>
<h3>Reduced feelings of isolation:&nbsp;Having someone outside of your direct working environment that you can ask questions, bounce ideas with and confide in, will help to create&nbsp;a sense of peer partnership&nbsp;that may not always be available in your workplace.</h3>
</li><li>
<h3>Accountability:&nbsp;A good mentor will provide you with honest feedback and&nbsp;hold you accountable to your career goals.</h3>
</li><li>
<h3>Career planning:&nbsp;&nbsp;As a mentee, you can sit down with your mentor to set long term goals and&nbsp;strategically plan out the next steps&nbsp;to reach your career objectives.</h3>
</li><li>
<h3>Confidence and talent development:&nbsp;&nbsp;A mentor who has expertise in your field will be able to&nbsp;identify your strengths and talents and offer suggestions on how you can further develop them&nbsp;and grow professionally. This is guaranteed to boost your confidence and work performance!</h3>
</li>
</ol>
<p></p>


<Link className="back_link" to="/en/personal_agency/goals">Back to: Develop Life and Career Goals</Link><Link className="next_link" to="/en/personal_agency/research">Next page: Do the Research</Link>
    </div>


  </Layout>
)

export default SecondPage
