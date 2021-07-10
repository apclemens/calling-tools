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
      title="Pursue your Education"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../../images/map.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li><Link to="/en/references">References</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "3rem",textAlign: "center",borderBottom: "2px solid black"}}>Pursue your Education</h1>

<div className="image" style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../../images/education.jpg"
/>
</div>
<h1>No matter where you are or what your circumstances, more opportunities will open up to you if you pursue an education, whether that be a degree or certification.</h1>


<Link className="back_link" to="/en/personal_agency/research">Back to: Do the Research</Link><Link className="next_link" to="/en/personal_agency/volunteer">Next page: Volunteer!</Link>
    </div>


  </Layout>
)

export default SecondPage
