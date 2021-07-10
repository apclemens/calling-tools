import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Herramientas de Llamada"
    image="rest.jpg"
    language="es"
  >
    <Seo
      title="test"
      defaultTitle="Herramientas de Llamada"
      lang="es"
    />
<StaticImage
  src="../../images/rest.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/es/">test</Link></li><li>test</li><li><Link to="/es/who_am_i/">test</Link></li><li><Link to="/es/personal_agency/">test</Link></li><li><Link to="/es/references">test</Link></li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "4.5rem",textAlign: "center",borderBottom: "2px solid black"}}>test</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna odio, hendrerit id mattis ultrices, pretium eu arcu. Vivamus laoreet egestas tortor, in rutrum felis consequat eget. Quisque vel est sit amet tellus consectetur pellentesque. Duis ornare nisl sapien, pulvinar varius massa laoreet aliquet. Phasellus commodo nisi id tortor elementum, sit amet auctor ex varius. Donec et libero quis dolor auctor semper. Curabitur vel lacus nec tellus ultricies posuere nec et enim. Nunc condimentum ante ante, ac pretium diam scelerisque at.</p>

<p>Aliquam lorem sapien, tempor a mattis et, sagittis vitae leo. Nunc dictum gravida volutpat. Aenean ac est non augue gravida bibendum nec quis lectus. Nunc vulputate risus ut urna maximus, vel placerat lacus laoreet. Praesent imperdiet a mauris eu tempor. Nulla bibendum pharetra mauris, et gravida tortor tincidunt nec. Cras eget vulputate metus. Mauris id lacus enim. Nulla metus arcu, porta a malesuada vitae, sodales nec ipsum. Nullam eu sodales ligula, id pellentesque ipsum. Suspendisse venenatis imperdiet erat vitae cursus.</p>

<p>Quisque pellentesque non leo vel dignissim. Phasellus sagittis dignissim nisl sit amet bibendum. Curabitur viverra consequat mauris. Praesent justo mi, lacinia id orci at, ultricies tincidunt lacus. Curabitur maximus mollis lorem, non ullamcorper orci. Proin nibh dolor, semper sed efficitur id, vestibulum lobortis ipsum. Maecenas maximus nisi lorem, eget tempus ante vehicula id. Aliquam et vehicula magna. Integer id cursus enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<p>Aliquam eget quam rhoncus, iaculis risus eget, venenatis dolor. Nam egestas mattis maximus. Fusce posuere tempor ornare. Nunc a interdum diam, eget blandit augue. Vestibulum elementum, elit sed eleifend rutrum, risus diam commodo leo, sed egestas massa dui a ipsum. Nam lacinia urna commodo enim tempor porta. Sed efficitur lacus metus, sit amet tristique tortor volutpat fermentum. Duis blandit sem id scelerisque ultricies. Aliquam sed mauris non nisi consectetur sollicitudin. Duis tortor nisl, efficitur sit amet dolor sodales, tristique malesuada ligula. Aenean a eros vulputate, convallis lorem vitae, vestibulum tellus. Aliquam et nisi mi.</p>

<p>Aenean imperdiet egestas placerat. Donec eu volutpat enim. Aliquam in lacinia sapien. Morbi risus turpis, elementum in ante vel, cursus luctus orci. In hac habitasse platea dictumst. Vivamus purus turpis, luctus ut luctus elementum, semper ornare tellus. Nunc nibh nisl, sollicitudin ut consectetur in, facilisis ut turpis. </p>

    </div>

  </Layout>
)

export default SecondPage
