import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout
    siteTitle="Calling Tools"
    image="paths3.jpg"
    language="en"
  >
    <Seo
      title="References"
      defaultTitle="Calling Tools"
      lang="en"
    />
<StaticImage
  src="../../images/paths3.jpg"
/>

<div class="languages"></div>

    <div class="content">
<div><ul><li><Link to="/en/">What Is Calling?</Link></li><li><Link to="/en/personal_well_being">Step 1: Take Care Of Yourself</Link></li><li><Link to="/en/who_am_i/">Step 2: Know Who You Are</Link></li><li><Link to="/en/personal_agency/">Step 3: Take Charge</Link></li><li>References</li></ul></div>

<h1 style={{fontWeight: 'bold', fontSize: "4.5rem",textAlign: "center",borderBottom: "2px solid black"}}>References</h1>

<h1><span style={{fontWeight: 400}}>References and Recommended Reading for further reflection</span></h1>
<div style={{width: "50%",float: "right"}}>
<StaticImage
  src="../../images/rainbow.jpg"
/>
</div>
<div className="quote" style={{width: "50%"}}>
<h3><i>&nbsp;&ldquo;</i><span style={{fontWeight: 400}}>For I know the plans&nbsp;I have for you,&rdquo; declares the&nbsp;Lord, &ldquo;plans to prosper&nbsp;you and not to harm you, plans to give you hope and a future.&nbsp;</span>12&nbsp;<span style={{fontWeight: 400}}>Then you will call&nbsp;on me and come and pray&nbsp;to me, and I will listen&nbsp;to you.&nbsp;</span>13&nbsp;<span style={{fontWeight: 400}}>You will seek&nbsp;me and find me when you seek me with all your heart.&rdquo;</span></h3>
<h3><span style={{fontWeight: 400}}>--Jeremiah 29:11-13&nbsp;</span></h3>
</div>
<h2><span style={{fontWeight: 400}}>Ideas and tools for this website were drawn from the following resources, which can be further explored:&nbsp;</span></h2>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Blake, Jenny.&nbsp;Pivot: The only move that matters is your next one. New York: Portfolio/Penguin, 2017</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Bolles, Richard N.&nbsp;What Color is Your Parachute? 2019: a Practical Manual for Job-Hunter and Career-Changers.&nbsp;California/New York: Ten Speed Press, 2018&nbsp; (Includes The Flower Exercise, a self-inventory, which around people, working conditions, transferable skills, knowledge, salary, geography and purpose in life.)</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Brooks, David.&nbsp;The Second Mountain. New York: Random House, 2019</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Frankl, Viktor E.&nbsp;Man&rsquo;s Search for Meaning.&nbsp;Boston: Beacon Press,&nbsp;2006</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Jones, Laurie Beth.&nbsp;The Path: Creating Your Mission Statement for Work and for Life.&nbsp;New York: Hyperion, 1996 (Provides inspiring and practical advice to lead readers through every step of both defining and fulfilling a mission.)</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Konstant, Marti.&nbsp;Activate Your Agile Career.&nbsp;Chicago: Konstant Change Publishing, 2018</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Lore, Nicholas.&nbsp;The Pathfinder: How to Choose or Change your Career for a Lifetime of Satisfaction and Success. New York: Simon &amp; Schuster, 2011 (Like a personal career coach, guides you through the process of moving forward from your present uncertainty to designing career that fits you.)</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>O&rsquo;Connor, Elizabeth.&nbsp;Cry Pain, Cry Hope: Thresholds to Purpose.&nbsp;Waco, TX: Word Books, 1987&nbsp;(Explores the dimensions of vocation with an emphasis on spiritual gifts and life in community.)&nbsp;</span></h3>
</li>
</ul>
<ul>
<li aria-level="3">
<h3><span style={{fontWeight: 400}}>Yates, Julia.&nbsp;The Career Coaching Toolkit.&nbsp;London and New York: Routledge Taylor &amp; Francis Group, 2019</span></h3>
</li>
</ul>
<p></p>
<p></p>

    </div>

  </Layout>
)

export default SecondPage
