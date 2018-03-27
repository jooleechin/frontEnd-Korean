import React, { Component } from 'react'
import { Dropdown, NavItem, Button, Row, Col } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <div>
        <Row className="pt4 pl2">
          <Col s={1}>
            <Dropdown trigger={
                <Button ><i className="fas fa-bars"></i></Button>
              }>
              <NavItem>how it works</NavItem>
              <NavItem>learn</NavItem>
              <NavItem>signup</NavItem>
            </Dropdown>
          </Col>
          <Col s={10}>
            <h1 className="hanja tracked tc mt0">hån(:)jå</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
