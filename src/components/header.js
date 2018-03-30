import React, { Component } from 'react'
import { Dropdown, NavItem, Button, Row, Col, Modal } from 'react-materialize'
import { Link } from 'react-router-dom'

class Header extends Component {
  changeToLogout() {
    return this.props.id
      ?<Link to="/"><h1 onClick={this.props.clearUser}className="signLog tracked athelas pointer grow">logout</h1></Link>
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
              <Modal
                header='안녕하새요 (hello)'
                trigger={<NavItem className="dropDowns">how it works</NavItem>}>
                  <p className="spDesc">
                    welcome to hån(:)jå, a website created with react.js that will
                    teach you how to speak/read basic korean characters. it utilizes spaced-repition,
                    which is an effective studying technique that was created from studying and analyzing how
                    the brain stores new information<br /><br /><br />
                    <img src={require('../assets/brain.gif')} alt="brain gif" />
                  </p>
              </Modal>
              <Link to="/learn"><NavItem>learn</NavItem></Link>
              <Link to="/quiz"><NavItem style={{display: (this.props.quizShowing ? 'inline-block':'none')}}>quiz</NavItem></Link>
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
