import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { connect } from 'react-redux'
import palette from '../theme/palette'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import PublicNavList from '../navs/publicNav'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1,
      open: false,
      componentsmenuopen: false
    }
  }

  handleChange = (value) => this.setState({ value });
    onLeftIconButtonClick = () => {
      console.log('hi;')
      this.setState({ open: !this.state.open })
    };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open
    })
  };

  handleClick=() => {
    this.setState({ componentsmenuopen: !this.state.componentsmenuopen })
  };

handleClose = event => {
  if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
    return
  }

  this.setState({ componentsmenuopen: false })
};

 render () {
   return (
     <div>

       <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} anchor="right" >
         <div
           tabIndex={0}
           role="button"

         >
           <div className="sidelistwrapper">
             <React.Fragment><PublicNavList/></React.Fragment>
           </div>
         </div>
       </Drawer>

       <div className="appbarwrapper">

         <AppBar position="static">
           <Toolbar>
             <span color="inherit" className="headertypoclass">
               <img src={'NPlogo.svg'} style={{ marginTop: 4, maxWidth: '120px', maxHeight: '48px' }}/>
               
             </span>
             <h3>NetProphet Technologies</h3>

             <IconButton className="iconbuttonsyle" color="inherit" aria-label="Menu" onClick={this.onLeftIconButtonClick}>
               <MenuIcon />
             </IconButton>
           </Toolbar>
         </AppBar>
       </div>
     </div>
   )
 }
}

export default Header;
