import React, { Component } from 'react'
import { Dropdown, NavItem, Button, Row, Col } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <div className="box">
        <Row className="pt4 pl2">
          <Col s={1}>
            <Dropdown trigger={
                <Button className="editButt"><i className="fas fa-bars"></i></Button>
              }>
              <NavItem className="dropDowns">how it works</NavItem>
              <NavItem>learn</NavItem>
              <NavItem>quiz</NavItem>
            </Dropdown>
          </Col>
          <Col s={10}>
            <h1 className="hanja tracked tc mt0">hån(:)jå</h1>
          </Col>
          <Col s={1}>
            <h1 className="signLog tracked calisto">login</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
