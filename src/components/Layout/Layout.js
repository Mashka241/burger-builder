import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideDrawer: true
    }
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
