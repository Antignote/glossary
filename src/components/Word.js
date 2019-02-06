import React, { Component } from 'react';
import similarity from '../utils/similarity';
import './Words.css';

class Word extends Component {
  state = {
    answer: '',
    isFinished: false,
    isCorrect: false
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { correct } = this.props;
    this.setState(({ answer }) => {
      const trimmedAnswer = answer.trim();
      return {
        isFinished: !!trimmedAnswer,
        isCorrect: trimmedAnswer.toLowerCase() === correct.toLowerCase() ? 2 : similarity(trimmedAnswer, correct) > 0.75 ? 1 : 0
      }
    })
  };

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  reset = () => this.setState({ isFinished: false, isCorrect: false, answer: '' });

  render() {
    const { vocable, correct } = this.props;
    const { answer, isFinished, isCorrect } = this.state;
    return (
      <form className="words" onSubmit={this.handleSubmit}>
        <fieldset disabled={isFinished}>
          <legend>{vocable}</legend>
          <input className="words-input" type="text" value={answer} onChange={this.handleChange}/>
          <button className="words-button" onClick={this.handleSubmit}>Svara</button>
          {isFinished && isCorrect ? <span className="words-right">Rätt! {isCorrect < 2 && correct} </span> : null}
          {isFinished && !isCorrect ? <span className="words-wrong">{correct}</span> : null}
        </fieldset>
      </form>
    )
  }
}

export default Word;