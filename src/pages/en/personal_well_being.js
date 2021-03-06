import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Calling Tools"
    image="rest.jpg"
    language="en"
  >
    <Seo
      title="Step 1: Take Care Of Yourself"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../images/rest.jpg"
/>

<div class="languages"><Link className="current" to="/en/personal_well_being">English</Link><Link to="/fr/personal_well_being">Français</Link><Link to="/es/personal_well_being">Español</Link><Link to="/ht/personal_well_being">Krèyol ayisyen</Link><Link to="/pt/personal_well_being">Português</Link></div>


    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li>Step 1: Take Care Of Yourself</li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><ul style={{display: 'none'}}><li><Link to="/en/who_am_i/values">Values in Work and Life</Link></li><li><Link to="/en/who_am_i/know_your_talents">Know Your Talents</Link></li><li><Link to="/en/who_am_i/passion_and_interests">Passions and Interests</Link></li></ul><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><ul style={{display: 'none'}}><li><Link to="/en/personal_agency/goals">Develop Life and Career Goals</Link></li><li><Link to="/en/personal_agency/mentor">Seek a Mentor</Link></li><li><Link to="/en/personal_agency/research">Do the Research</Link></li><li><Link to="/en/personal_agency/education">Pursue your Education</Link></li><li><Link to="/en/personal_agency/volunteer">Volunteer!</Link></li><li><Link to="/en/personal_agency/business">Consider Starting your own Business or Service</Link></li><li><Link to="/en/personal_agency/parallel">Parallel Pursuits</Link></li><li><Link to="/en/personal_agency/transactions">Transactions most likely to get me a job in the quickest amount of time</Link></li><li><Link to="/en/personal_agency/online">Create a Viable Online Presence</Link></li><li><Link to="/en/personal_agency/interview">Prepare for your Job Interview</Link></li></ul><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "4.5rem",textAlign: "center",borderBottom: "2px solid black"}}>Step 1:<br></br>Take Care Of Yourself</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../images/flowers.jpg"
/>
</div>
<h1>Personal Wellbeing&nbsp;<br /></h1>
<h2>To pursue a meaningful vocation, it is important to ensure we are coming to the pursuit primarily from a sense of wellbeing.&nbsp;Positive well-being has a clear link with good career outcomes, equipping you to put your ideas into action.&nbsp;</h2>
<h2>Consider the following themes that are shown to have impact on your personal well-being.</h2>
<ul>
<li aria-level="3">
<h3>Get adequate rest and eat healthy food as is possible. These provide the foundation of healthy living, although they are often ignored.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Stay active. Daily exercise (even when it's a walk&nbsp;to get somewhere) and fresh air (sunlight!) help to clear one&rsquo;s thinking and give new perspective.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Connect with people and community. Nurturing healthy relationships, and being part of a supportive community that will encourage you in your calling in life,&nbsp;boosts self-esteem and gives you connections for a more successful career outcome.</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Foster a sense of gratitude. Taking notice of all the many things you can be grateful for each day increases one&rsquo;s sense of optimism. <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=cpkEvBtyL7M">See this short video for inspiration.</a></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Keep learning. Developing new interests or hobbies, reading good literature keeps the mind active.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Practice Spiritual Disciplines. Morning meditation, reading, journaling, prayer and fasting, crying if necessary (!), builds inner calm and readiness to face the day. "Cast all your cares on him, for he cares for you." 1 Peter 5:7</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Give. Reaching out to help others in kindness boosts our sense of self-esteem</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Plan Ahead. Having a good sense of structure for your week (what's achievable and within your control) helps to reduce anxiety from one day to the next.&nbsp;</h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3>Keep Reasonable Expectations of yourself, and encourage your support community to do likewise.</h3>
</li>
</ul>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&nbsp;&ldquo;For I know the plans&nbsp;I have for you,&rdquo; declares the&nbsp;Lord, &ldquo;plans to prosper&nbsp;you and not to harm you, plans to give you hope and a future.&nbsp;</i>12&nbsp;<i>Then you will call&nbsp;on me and come and pray&nbsp;to me, and I will listen&nbsp;to you.&nbsp;</i>13&nbsp;<i>You will seek&nbsp;me and find me when you seek me with all your heart.&rdquo;</i></h3>
<h3><i>&#8212; Jeremiah 29:11-13&nbsp;</i></h3>
</div>
<div className="quote">
<h3><i>&ldquo;If you want a full life, you have to give up whatever addiction you might have to comfort, to not rocking your boat, and to avoiding the feelings of fear and uncertainty that are always one&rsquo;s companion on journeys outside the safety of the daily routine. A passionately lived life is not always comfortable. Going for it involves being open to all of life: the joys, the sorrows, the mundane, as well as the magic, the splendid victories, the most abject defeats.&rdquo;&nbsp;</i></h3>
<h3><i>&#8212; Nicholas Lore, The Pathfinder</i><span style={{fontWeight: 400}}><br /></span></h3>
</div>
<p><br /><span style={{fontWeight: 400}}><br /></span></p>


<Link className="back_link" to="/en/">Back to: What Is Calling?</Link><Link className="next_link" to="/en/who_am_i/">Next page: Step 2: Know Who You Are</Link>
    </div>


  </Layout>
)

export default SecondPage
