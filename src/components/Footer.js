import React from 'react'
import palette from '../theme/palette'

const Footer = () => {
  return <div style={{ background: palette.yellow,
   paddingTop: '1em',
   paddingBottom: '1em',
   boxShadow: '5px 5px 5px 5px black'
   }}
   className="footer-container-box">
      <h2>
        NetProphet Technologies
      </h2>
    </div>
}

export default Footer;
