import React, { Component } from 'react'
import { Dropdown, NavItem, Button, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom'

class Header extends Component {
  changeToLogout() {
    return this.props.id
      ?<Link to="/OptionsView"><h1 className="signLog tracked athelas pointer grow">logout</h1></Link>
      :<Link to="/Login"><h1 className="signLog tracked athelas pointer grow" >login</h1></Link>
  }

  render() {
    return (
      <div className="box">
        <Row className="pt4 pl2">
          <Col s={1}>
            <Dropdown trigger={
                <Button className="editButt"><i className="fas fa-bars"></i></Button>
              }>
              <NavItem className="dropDowns">how it works</NavItem>
              <Link to="/learn"><NavItem>learn</NavItem></Link>
              <Link to="/quiz"><NavItem>quiz</NavItem></Link>
            </Dropdown>
          </Col>
          <Col s={10}>
            <Link to="/"><h1 className="hanja  grow tracked tc mt0">hån(:)jå</h1></Link>
          </Col>
          <Col s={1}>
            {this.changeToLogout()}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
