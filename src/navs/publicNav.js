import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import FaceIcon from '@material-ui/icons/Face'
import DescriptionIcon from '@material-ui/icons/Description'
/* import your desired icon from material-ui icons library */
import { NavLink } from 'react-router-dom'

export const publicNavs = [
  {
    url: '/',
    name: 'Home',
    icon: <HomeIcon/>
  },
  {
    url: '/registration',
    name: 'Register',
    icon: <FaceIcon/>
  },
  {
    url: '/learn_more',
    name: 'Learn More',
    icon: <DescriptionIcon/>
  }
  // add new Nav links here as a json object, in this file the public navigations
]

export default () => (
  publicNavs.map((navItem) => {
    return <NavLink to={navItem.url} className="NavLinkItem" key={navItem.url} activeClassName="NavLinkItem-selected"> <List component="nav" >  <ListItem button>
      <ListItemIcon className="innernavitem">
        {navItem.icon}
      </ListItemIcon>
      <ListItemText primary={navItem.name} className="innernavitem" color="black"/>
    </ListItem></List> </NavLink>
  })

)
