import React, { Component } from 'react'
import { Dropdown, NavItem, Button } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <div>
        <Dropdown trigger={
            <Button>Drop me!</Button>
          }>
          <NavItem>one</NavItem>
          <NavItem>two</NavItem>
          <NavItem divider />
          <NavItem>three</NavItem>
        </Dropdown>
      </div>
    )
  }
}

export default Header
