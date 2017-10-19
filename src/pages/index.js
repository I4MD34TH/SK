import React from 'react'
import Link from 'gatsby-link'
import { Button, Grid, Col, Carousel, Row } from 'react-bootstrap'

const IndexPage = () => (
  <div className={'main'}>
    <section className={'intro'} style={{'background-image':'url(../images/background.png)', 'background-size':'cover', 'background-position':'top', }}>
      <div className={'intro-content container-fluid'}>
        <div className={'intro-frame'}>
          <h1 className={'text-right'}>Security Analyst<br /> and<br /> Real Estate<br /> Developer{/*Pakistans Leading <br /> Real Estate <br /> Investment <br /> Advisor*/}</h1>
          <a className={'text-right'}><strong>LEARN MORE</strong></a>
          <img src={'../images/frame.png'} />
        </div>
        {/*<Link to="/page-2/">Go to page 2</Link>*/}
      </div>
    </section>
    <section className={'about'}>
      <Grid id={'about'} className={'about-1'}>
        <div>
          <h1 className={'about-heading'}><strong>A LITTLE ABOUT ME</strong></h1>
          <p className={'about-para'}>During more than 35 years of meritorious service in Pakistan Army, Major General (R) Muhammad Saad khattak had the privilege to serve on prestigious staff, instructional and managerial appointments at premier military institutions and organisations. After retirement from the army, General Khattak decided to utilize his vast managerial-cum-administrative experience and expertise in the field of real estate development.</p>
        </div>
        <img src={'../images/thumb.png'} />
      </Grid>
      <div style={{'width':'100%', }}>
        <img className={'about-1-img'} src={'../images/thumb.png'} />
      </div>
      <div id={'mission'} className={'about-2'}>
        <Grid className={'child'}>
          <Row className={'text-center'}>
            <h1 className={'about-heading'}><strong>MY MISSION</strong></h1>
            <p className={'about-para'}>After 35 years in the Army, he continues to serve Pakistan in Real Estate development.</p>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-2.png'} />
              <h4><strong>The Nation</strong></h4>
              <p>Writes articles in The Nation regarding security and political position.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-3.png'} />
              <h4><strong>PICSS</strong></h4>
              <p>(Pakistan Institute of Conflict and Security Studies)<br /> Working on security & CT issues in the region particularly in Pakistan and Afghanistan.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-4.png'} />
              <h4><strong>Graana</strong></h4>
              <p>Presiding the board of directors at Graana Group of Companies General Khattak is a mentor for dynamic young individuals guiding them to make quality contributions towards Pakistan's real estate industry.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
    <section id={'contact'} className={'contact'}>
      <Grid>
        <div className={'contact-heading'}>
          <h2 className={'ch-1'} style={{'color':'white', }}><strong>Looking for a First-Class<br /> Real Estate <span style={{'color':'#FFC107', }}>Investment Advisor</span></strong></h2>
          <h2 className={'ch-2'} style={{'color':'white', 'font-size':'28px', }}><strong>Looking for a<br /> First-Class<br /> Real Estate <span style={{'color':'#FFC107', }}>Investment Advisor</span></strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</p>
          <button className={'contact-btn'}><strong>Contact Now</strong></button>
        </div>
        <img src={'images/saad.png'} />
      </Grid>
    </section>
    <section id={'quotes'} className={'text-center quotes'}>
      <Grid>
        <img src={'../images/quotes-logo.png'} style={{'width':'50px', 'margin-top':'90px', 'margin-bottom':'70px', }} />
        <div style={{'margin-top':'20px', 'margin-bottom':'150px',}}>
          <Carousel interval={3500}>
            <Carousel.Item>
              <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>There is no such thing as perfect decision.Every decision you make is perfected with time. &#35;Entrepreneur</i></p></blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>Have more then you show. Speak less then you know.</i></p></blockquote>
            </Carousel.Item>
          </Carousel>
          <p style={{'color':'#2d2d2d', 'margin-top':'30px', }}><strong>&mdash; Saad Khattak <a href={"https://twitter.com/SaadKhtk"} target={'_blank'}>&#40;&#64;SaadKhtk&#41;</a> &mdash;</strong></p>
        </div>
        <script async src={"//platform.twitter.com/widgets.js"} charset={"utf-8"}></script>
      </Grid>
    </section>
  </div>
)

export default IndexPage
