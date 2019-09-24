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

  showTitle() {
    if (this.props.image)
      return <div style={{
        background: `url(${this.props.image}) no-repeat center`,
        backgroundSize: 'contain',
        width: '100%',
        height: '100%'
      }} />
    return <h1 style={{ textAlign: 'center' }}>{this.props.title}</h1>
  }

  render() {
    return <Card style={{
      backgroundColor: this.props.color,
      height: '12em',
      marginTop: '1.5em',
    }}
      onMouseEnter={() => this.setState({ show: true })}
      onMouseLeave={() => this.setState({ show: false })}
    >
      {this.state.show ? <div style={{ padding: '2em', color: 'white' }}>{this.props.children}</div> : this.showTitle()}
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
      minHeight: '30em',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      paddingTop: '10em',
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
          <Grid item xs={10} md={8} style={{ padding: '2em' }}>
            <h1>Beyond Full-Stack Consulting</h1>


            <div className="hero-text">

              <p style={{ fontSize: 18 }}>
                Growth-hacking + Marketing Dev-ops
                <br />Automation + Workforce Optimization
                <br />Established 2008
              </p>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '2em' }}
              >
                Contact Us
                </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <BannerDiv color='#d1d1d0'>
        <center><h1>Our Services</h1></center>
        <Grid container spacing={3} justify='center'>
          <Grid item md={3} xs={6}>
            <Card style={{ textAlign: 'center', height: '15em', padding: '1em' }}>
              <h2>Marketing</h2>
              <h4>Growth-hacking, Landing Page Optimization, Ad Campaigns<br /><br />
                  Drive Traffic, Capture Leads, Build Relationships, Generate Sales<br /><br />
                  Build a Brand Identity, Measure Focus Groups, Leave your Mark!</h4>
            </Card>
          </Grid>
          <Grid item md={3} xs={6}>
            <Card style={{ textAlign: 'center', height: '15em', padding: '1em' }}>
              <h2>Development</h2>
              <h4>Any stack -- Front-end, Back-end, Mobile, Wearable, Embedded<br /><br />
                  Python, Ruby, PHP, Java or JS, .Net, rPI or Arduino, SQL or NoSQL, Docker<br /><br />
                  UX, Unit Testing, Performance Tuning, Big Data, Machine Learning</h4>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card style={{ textAlign: 'center', height: '15em', padding: '1em' }}>
              <h2>Operations</h2>
              <h4>Next-Gen Platforms for 2016: Focus on your Business, Not Servers<br /><br />
                  High-Availability, Auto-Scaling, Capacity Planning and Monitoring<br /><br />
                  Bare-Metal, Virtualization or Containers, all with Dev-Parity</h4>
            </Card>
          </Grid>
        </Grid>
      </BannerDiv>
      <BannerDiv>
        <center><h1>Our Work</h1></center>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={10} sm={3}>
            <ColorCard color='#495b66' image='/payweilogo1.svg'>
              <h4>Send invoices and recieve payments in any cryptocurrency of your choosing</h4>
              <Link to='www.paywei.co'>
                <Button variant="contained" color='primary'>
                  paywei.co
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={7}>
            <ColorCard color='#8cbc60' image='/txgunlogoH.svg'>
              <h4>Receive notifications and webhooks for transactions on the blockchain</h4>
              <Link to='www.txgun.io'>
                <Button variant='contained' color='secondary'>
                  txgun.io
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={6}>
            <ColorCard color='#d2bb60' image='/annex3.svg'>
              <h4>Receive notifications and webhooks for transactions on the blockchain</h4>
              <Link to='a.nnex.io'>
                <Button variant='contained' color='secondary'>
                  a.nnex.io
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={4}>
            <ColorCard color='#8ecfc5'image='/shipchain-logo-outline.svg'>
            <h4>Receive notifications and webhooks for transactions on the blockchain</h4>
            <Link to='shipchain.io'>
                <Button variant='contained' color='secondary'>
                  shipchain.io
                </Button>
              </Link>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={5}>
            <ColorCard color='#6f8f5b'>
              <h3>openScale</h3>
            </ColorCard>
          </Grid>
          <Grid item xs={10} sm={5}>
            <ColorCard color='#a78d22'>
              <h3>shipChain</h3>
            </ColorCard>
          </Grid>
        </Grid>
      </BannerDiv>
      <BannerDiv color='#d1d1d0'>
        <center><h1>Our Team</h1></center>
        <Grid container spacing={3} justify='center'>
          <Grid item xs={3} style={{ paddingTop: '2em', paddingBottom: '3em' }}>
            <Card style={{ minHeight: '250px', textAlign: 'center' }}>
              <h2>Lee<br />Bailey</h2>
              <h4>Co-Founder, President</h4>
              <img style={{ maxWidth: '100%', position: 'relative', bottom: -10 }} src='./lee.jpg'></img>
            </Card>
          </Grid>
          <Grid item xs={3} style={{ paddingTop: '2em', paddingBottom: '2em' }}>
            <Card style={{ minHeight: '250px', textAlign: 'center' }}>
              <h2>Rob<br />Wells</h2>
              <h4>Co-Founder, Engineer</h4>
              <img style={{ maxWidth: '100%', position: 'relative', bottom: -10 }} src='./rob.jpg'></img>
            </Card>
          </Grid>
          <Grid item xs={3} style={{ paddingTop: '2em', paddingBottom: '2em' }}>
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
