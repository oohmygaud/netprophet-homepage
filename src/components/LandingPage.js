import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import palette from '../theme/palette'
import { Link } from 'react-router-dom'

class ColorCard extends React.Component {
  state = {
    show: false,
  }

  showCoverView() {
    if (this.props.image)
      return <div style={{
        background: `url(${this.props.image}) no-repeat center`,
        backgroundSize: 'contain',
        width: '80%',
        height: '10em',
        margin: '2em', 
      }} />
    return <h1 style={{ textAlign: 'center' }}>{this.props.title}</h1>
  }

  render() {
    return <Card style={{
      backgroundColor: this.props.color,
      height: '14em',
    }}
      onMouseEnter={() => this.setState({ show: true })}
      onMouseLeave={() => this.setState({ show: false })}
    >
      {this.state.show ? <div style={{ padding: '1em', color: 'white' }}>{this.props.children}</div> : this.showCoverView()}
    </Card>
  }
}

let BannerDiv = ({ color, children, style }) => <div style={{
  paddingTop: '2em',
  paddingBottom: '2em',
  background: color,
  ...style
}}>
  <Grid container justify='center'>
    <Grid item xs={10}>{children}</Grid>
  </Grid>

</div>



class LandingPage extends React.Component {

  handleHover() {
    return <ColorCard>

    </ColorCard>
  }

  render() {
    const heroStyle = {
      background: 'url(/stockbg.jpeg) fixed',
      marginTop: '-20px',
      minHeight: '80vh',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop: '10vh',
      /*
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative' */
    }

    return <div className="landingPagebodyComponent">

      <br />
      <div style={heroStyle} className="hero-text">
        <Grid container justify='center'>
          <Grid item xs={12} md={8} style={{ padding: '2em' }}>
            <h1 style={{fontSize: '3em'}}>Beyond Full-Stack Consulting</h1>


            <div className="hero-text">

              <p style={{ fontSize: 18 }}>
                Growth-hacking + Marketing Dev-ops
                <br />Automation + Workforce Optimization
                <br />Established 2008
              </p>
	<a href="mailto:sales@netprophet.tech">
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '2em' }}
              >
                Contact Us
                </Button>
		  </a>
            </div>
          </Grid>
        </Grid>
      </div>
      <BannerDiv color={palette.yellow}>
        <center><h1>Our Services</h1></center>
        <Grid container spacing={3} justify='center' style={{fontSize: '0.95em'}}>
          <Grid item sm={6} xs={12} md={4}>
            <Card style={{minHeight: '15em', padding: '1em 2em', borderTop: 'black 0.5em solid'}}>
              <h2 style={{ textAlign: 'center', marginTop: '0em' }}>Marketing</h2>
              <li>Growth-hacking, Landing Page Optimization, Ad Campaigns</li><br />
              <li>Drive Traffic, Capture Leads, Build Relationships, Generate Sales</li><br />
              <li>Build a Brand Identity, Measure Focus Groups, Leave your Mark!</li>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12} md={4}>
            <Card style={{ minHeight: '15em', padding: '1em 2em', borderTop: 'black 0.5em solid'}}>
              <h2 style={{ textAlign: 'center', marginTop: '0em' }}>Development</h2>
              <li>Any stack -- Front-end, Back-end, Mobile, Wearable, Embedded</li><br />
              <li>Python, Ruby, PHP, Java or JS, .Net, rPI or Arduino, SQL or NoSQL, Docker</li><br />
              <li>UX, Unit Testing, Performance Tuning, Big Data, Machine Learning</li>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card style={{ minHeight: '15em', padding: '1em 2em', borderTop: 'black 0.5em solid'}}>
              <h2 style={{ textAlign: 'center', marginTop: '0em' }}>Operations</h2>
              <li>Next-Gen Platforms for 2016: Focus on your Business, Not Servers</li><br />
              <li>High-Availability, Auto-Scaling, Capacity Planning and Monitoring</li><br />
              <li>Bare-Metal, Virtualization or Containers, all with Dev-Parity</li>
            </Card>
          </Grid>
        </Grid>
      </BannerDiv>
      <BannerDiv style={{ border: '1px solid rgba(0,0,0,0.3)', borderLeft: 'none', borderRight: 'none' }}>
        <center><h1>Our Work</h1></center>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={10} sm={5} lg={3}>
            <ColorCard color='#6d6a75' image='/payweilogo1.svg.png'>
              <h3>Send invoices and manage your money using the Ethereum Network</h3>
              <Link to='www.paywei.co'>
                <Button variant="contained" color='primary'>
                  paywei.co
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={7} lg={5}>
            <ColorCard color='#26547c' image='/txgunlogoH.svg'>
              <h3>Receive notifications and webhooks for Ethereum Network transactions, without installing web3</h3>
              <Link to='www.txgun.io'>
                <Button variant='contained' color='primary'>
                  txgun.io
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={7} lg={4}>
            <ColorCard color='#EC7241' image='/shipchain-logo-outline.svg'>
              <h3>The Logistics Industry Blockchain: Trustless, Transparent Tracking for Real World Assets.</h3>
              <Link to='ShipChain.io'>
                <Button variant='contained' color='primary'>
                  ShipChain.io
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={5} lg={5}>
            <ColorCard color='#2e4052' image='/annex3.svg'>
              <h3>High volume DSP/RTB and clickfraud blocker for the modern internet advertiser</h3>
              <h5>(decomissioned)</h5>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={6} lg={4}>
            <ColorCard color='#628395' image='/openscale.png'>
              <h3>Swiss Foundation for Open Governance of ShipChain Network Blockchain and the OpenSCALE standards format</h3>
              <h5>(pending)</h5>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={6} lg={3}>
            <ColorCard color='#61210f' image='/traffic-haus.jpg'>
              <h3>Online Advertising Platform serving 1 billion daily visitors in under 7ms each</h3>
              <Link to='traffichaus.com'>
                <Button variant='contained' color='primary'>
                  traffichaus.com
                </Button>
              </Link>
            </ColorCard>
          </Grid>
        </Grid>
      </BannerDiv>
      <BannerDiv color='#d1d1d0'>
        <center><h1>Our Team</h1></center>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={12} md={3} style={{ paddingTop: '2em', paddingBottom: '3em' }}>
            <Card style={{ minHeight: '250px', textAlign: 'center' }}>
              <h2>Lee<br />Bailey</h2>
              <h4>Co-Founder, President</h4>
              <img style={{ maxWidth: '100%', position: 'relative', bottom: -10 }} src='./lee.jpg'></img>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} style={{ paddingTop: '2em', paddingBottom: '2em' }}>
            <Card style={{ minHeight: '250px', textAlign: 'center' }}>
              <h2>Rob<br />Wells</h2>
              <h4>Co-Founder, Engineer</h4>
              <img style={{ maxWidth: '100%', position: 'relative', bottom: -10 }} src='./rob.jpg'></img>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} style={{ paddingTop: '2em', paddingBottom: '2em' }}>
            <Card style={{ minHeight: '250px', textAlign: 'center' }}>
              <h2>Audrey<br />Worsham</h2>
              <h4>Software Engineer</h4>
              <img style={{ maxWidth: '100%', position: 'relative', bottom: -10 }} src='./aud.jpg'></img>
            </Card>
          </Grid>
        </Grid>
      </BannerDiv>
    </div>
  }
}

export default LandingPage
