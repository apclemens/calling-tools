import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Ferramentas de Chamada"
    image="inventory.jpg"
    language="pt"
  >
    <Seo
      title="test"
      defaultTitle="Ferramentas de Chamada"
      lang="pt"
    />
<StaticImage
  src="../../../images/inventory.jpg"
/>

<div class="languages"></div>


    <div class="content">
<div><ul><li><Link to="/pt/">test</Link></li><li><Link to="/pt/personal_well_being">test</Link></li><li><Link to="/pt/who_am_i/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/who_am_i/values">test</Link></li><li>test</li><li><Link to="/pt/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/pt/personal_agency/">test</Link></li><ul style={{display: 'none'}}><li><Link to="/pt/personal_agency/goals">test</Link></li><li><Link to="/pt/personal_agency/mentor">test</Link></li><li><Link to="/pt/personal_agency/research">test</Link></li><li><Link to="/pt/personal_agency/education">test</Link></li><li><Link to="/pt/personal_agency/volunteer">test</Link></li><li><Link to="/pt/personal_agency/business">test</Link></li><li><Link to="/pt/personal_agency/parallel">test</Link></li><li><Link to="/pt/personal_agency/transactions">test</Link></li><li><Link to="/pt/personal_agency/online">test</Link></li><li><Link to="/pt/personal_agency/interview">test</Link></li></ul><li><Link to="/pt/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/night.jpg"
/>
</div>
<h1><span style={{fontWeight: 400}}>Gifts &amp; Talents</span><span style={{fontWeight: 400}}><br /></span></h1>
<h1><span style={{fontWeight: 400}}>Gifts&nbsp;- A natural ability or talent.</span></h1>
<h1>Talents<span style={{fontWeight: 400}}>&nbsp;- Natural aptitude or skill.</span></h1>
<h1>Strengths<span style={{fontWeight: 400}}>&nbsp;- A good or beneficial quality or attribute of a person.</span></h1>
<h2><span style={{fontWeight: 400}}>Being aware of your gifts, talents and strengths helps to identify a better "fit" for a successful career. At the same time, it's important to be open to growth an learning in new areas we may not have yet developed, opening new windows of opportunity.&nbsp;</span></h2>
<h2>Test your gifts with these online tools (mostly free)</h2>
<h2><a target="_blank" rel="noreferrer" href="http://www.self-directed-search.com/"><span style={{fontWeight: 400}}>http://www.self-directed-search.com/</span></a></h2>
<p style={{textAlign: "center"}}><span style={{fontWeight: 400}}>*************************************</span></p>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>The best work, the best career, for you, the one that makes you happiest and most fulfilled, is going to be one that uses: your favorite transferable skills, in your favorite subjects, fields , or special knowledge, in a job that offers you your preferred people-environments, your preferred working conditions, with your preferred salary or other rewards, working toward your preferred goals and values.&rdquo;&nbsp;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Richard N. Bolles, What Color is Your Parachute?</span></h3>
</div>
<div className="quote">
<h3><i>&ldquo;</i><span style={{fontWeight: 400}}>We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>&#8212; Marie Curie</span></h3>
</div>


<Link className="back_link" to="/pt/who_am_i/values">Back to: test</Link><Link className="next_link" to="/pt/who_am_i/passion_and_interests">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
