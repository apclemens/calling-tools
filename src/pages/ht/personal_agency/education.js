import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Rele Zouti"
    image="map.jpg"
    language="ht"
  >
    <Seo
      title="test"
      defaultTitle="Rele Zouti"
      lang="ht"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/ht/">test</Link></li><li><Link to="/ht/personal_well_being">test</Link></li><li><Link to="/ht/who_am_i/">test</Link></li><ul><li><Link to="/ht/who_am_i/values">test</Link></li><li><Link to="/ht/who_am_i/know_your_talents">test</Link></li><li><Link to="/ht/who_am_i/passion_and_interests">test</Link></li></ul><li><Link to="/ht/personal_agency/">test</Link></li><ul><li><Link to="/ht/personal_agency/goals">test</Link></li><li><Link to="/ht/personal_agency/mentor">test</Link></li><li><Link to="/ht/personal_agency/research">test</Link></li><li>test</li><li><Link to="/ht/personal_agency/volunteer">test</Link></li><li><Link to="/ht/personal_agency/business">test</Link></li><li><Link to="/ht/personal_agency/parallel">test</Link></li><li><Link to="/ht/personal_agency/transactions">test</Link></li><li><Link to="/ht/personal_agency/online">test</Link></li><li><Link to="/ht/personal_agency/interview">test</Link></li></ul><li><Link to="/ht/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/education.jpg"
/>
</div>
<h2>No matter where you are or what your circumstances, more opportunities will open up to you if you pursue an education, whether that be a degree or certification.</h2>


<Link className="back_link" to="/ht/personal_agency/research">Back to: test</Link><Link className="next_link" to="/ht/personal_agency/volunteer">Next page: test</Link>
    </div>


  </Layout>
)

export default SecondPage
