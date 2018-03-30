import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-materialize'
import Nanobar from 'nanobar'
let baseURL = `https://learn-hanja.herokuapp.com`

var number = 0

const Next = (props) => {
  return (<h1 onClick={(e) => {
    number++
    props.nextQuest()
  }} waves='light' className="quizButt pointer grow">next</h1>)
}

class Quiz extends Component {
  state = {
    questionArray: [],
     hideNext: true,
     question: '',
     a: '',
     b: '',
     c: '',
     d: '',
     answer: '',
     aCorrect: null,
     bCorrect: null,
     cCorrect: null,
     dCorrect: null
  }


  test = (userGuess, abcOrD) => {
    let option = ''
    switch (abcOrD) {
      case 'a':
        option = 'aCorrect'
        break
      case 'b':
        option = 'bCorrect'
        break
      case 'c':
        option = 'cCorrect'
        break
      case 'd':
        option = 'dCorrect'
    }
    if(userGuess === this.state.answer) {
      this.setState({[option]: 'correct'})
      debugger
      let {id, user_id, question_id}  = this.state.questionArray[number]
      axios.put(`${baseURL}/users/usersquestions`, {user_id, question_id})
    } else {
      let correct = ['a', 'b', 'c', 'd'].find(option => this.state[option] == this.state.answer) + 'Correct'
      this.setState({
        [option]: 'incorrect',
        [correct]: 'correct'
      })
    }
    this.showNext()
  }

  showNext = () => {
    this.setState({
      hideNext: false
    })
  }

  componentDidMount() {
    axios.get(`${baseURL}/users/${this.props.id}/quiz`)
      .then((response) => {
        this.setState({
          questionArray: response.data.quiz
        })
        this.nextQuest()
      })

  }

  nextQuest = () => {
    this.setState({
      hideNext: true,
      aCorrect: null,
      bCorrect: null,
      cCorrect: null,
      dCorrect: null
    })
    let question = this.state.questionArray[number]
         this.setState({
           question: question.question,
           a: question.a,
           b: question.b,
           c: question.c,
           d: question.d,
           answer: question.answer
         })

  }
  render() {
    return (
      <div>
        <div className="quizCard pinkColor tc">
          <h2 className="quizSymbol">{this.state.question}</h2>
          <div className="allOptions calisto">
            <h5 className={`options pointer grow ${this.state.aCorrect} `} onClick={() => this.test(this.state.a, 'a')} waves='light'>{this.state.a}</h5>
            <h5 className={`options pointer grow ${this.state.bCorrect} `} onClick={() => this.test(this.state.b, 'b')} waves='light'>{this.state.b}</h5>
          </div>
          <div className="allOptions calisto">
            <h5 className={`options pointer grow ${this.state.cCorrect} `} onClick={() => this.test(this.state.c, 'c')} waves='light'>{this.state.c}</h5>
            <h5 className={`options pointer grow ${this.state.dCorrect} `} onClick={() => this.test(this.state.d, 'd')} waves='light'>{this.state.d}</h5>
          </div>
          <div className="nextButton">
            {!this.state.hideNext && <Next nextQuest={this.nextQuest}/>}
          </div>
        </div>
      </div>
    )
  }
}



export default Quiz
