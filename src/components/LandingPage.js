import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import palette from '../theme/palette'
import { Link } from 'react-router-dom'
import WebIcon from '@material-ui/icons/Web'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly'
import MoneyOffIcon from '@material-ui/icons/MoneyOff'

class LandingPage extends React.Component {
  
  render () {
    const heroStyle = {
      background: 'url(/confectionary-blue.png) ' + palette.dark_purple
    }

    return <div className="landingPagebodyComponent">

      <br />
      <div className="hero-image" style={heroStyle}>
        <Grid container>
          <Grid item lg={2}></Grid>
          <Grid item lg={4} md={6} xs={12} style={{ padding: '2em' }}>

            <div className="hero-text">
              <h1>Ethereum Transaction Notifications for Developers in a Hurry</h1>
              <p style={{ fontSize: 18 }}>TXGun is a SaaS web service for developers to be notified in configurable manners of transactions and events processed on a blockchain.</p>
              <Link to={'/learn_more'}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '1em', marginTop: '2em' }}
                >
                  Learn More
                </Button>
              </Link>
              <Link to={'/registration'}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: '1em', marginTop: '2em' }}
                >
                  Try TXGun Now
                </Button>
              </Link>
            </div>

          </Grid>
        </Grid>
      </div>

      <Grid container>
        <Grid item sm={4} style={{ padding: '3em', textAlign: 'center' }}>
          <div>
            <WebIcon style={{ fontSize: 100 }} />
            <h3>
              For Developers
            </h3>
            <p>
              Simple APIs for you to start integrating with the Ethereum blockchain today.
            </p>
          </div>
        </Grid>
        <Grid item sm={4} style={{ padding: '3em', textAlign: 'center' }}>
          <div>
            <ChildFriendlyIcon style={{ fontSize: 100 }} />
            <h3>
              Easy to Use
            </h3>
            <p>
              Don&apos;t install web3, don&apos;t run a node, just subscribe.
            </p>
          </div>
        </Grid>
        <Grid item sm={4} style={{ padding: '3em', textAlign: 'center' }}>
          <div>
            <MoneyOffIcon style={{ fontSize: 100 }} />
            <h3>
              Free in Beta
            </h3>
            <p>
              But you can send us beer money!
            </p>
          </div>
        </Grid>
      </Grid>

    </div>
  }
}

export default LandingPage
