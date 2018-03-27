import React, { Component } from 'react'
import { Dropdown, NavItem, Button, Row, Col } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <div>
        <Row>
            <Dropdown trigger={
                <Button className="bg-blue"><i class="fas fa-bars"></i></Button>
              }>
              <NavItem>how it works</NavItem>
              <NavItem>learn</NavItem>
              <NavItem>signup</NavItem>
            </Dropdown>
          <Col s={12} className="tc">
            <h1>hån(:)jå</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
