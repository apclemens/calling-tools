import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../DOTScomponents/layout"
import Seo from "../../DOTScomponents/seo"

const SecondPage = () => (
  <Layout
    siteTitle="DEFAULT_TITLE"
    image="IMAGE"
    language="LANGUAGE"
  >
    <Seo
      title="PAGE_TITLE_WO_HTML"
      defaultTitle="DEFAULT_TITLE"
      lang="LANGUAGE"
    />
<StaticImage
  src="../../DOTSimages/IMAGE"
/>

<div class="languages">LNG_LINKS</div>

    <div class="content">
<div>PG_LINKS</div>

<h1 style={{fontWeight: 'bold', fontSize: "HEADING_SIZErem",textAlign: "center",borderBottom: "2px solid black"}}>PAGE_TITLE_W_HTML</h1>

CONTENT

BACK_NXT
    </div>


  </Layout>
)

export default SecondPage
