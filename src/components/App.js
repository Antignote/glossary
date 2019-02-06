import React, { Component, Fragment } from 'react';
import Category from './Category';
import Choise from './Choise';
import { shuffle } from 'lodash';
import './App.css';
import words from '../data/words.json';

class App extends Component {
  state = {
    direction: 'lat',
    isShuffle: false,
    isTopicsHidden: false,
    glossary: words.glossary
  }

  handleSelectDirection = (direction) => {
    this.setState({ direction });
  };

  handleSelectShuffle = (isShuffle) => {
    this.setState({ isShuffle });
  };

  handleSelectHideTopics= (isTopicsHidden) => {
    this.setState({isTopicsHidden});
  };

  render() {
    const { direction, glossary, isShuffle, isTopicsHidden } = this.state;
    const categoryIndexes = Array.from(Array(glossary.length).keys());
    const categoryOrder = isShuffle ? shuffle(categoryIndexes) : categoryIndexes;
    const classNames = ['app'];
    isTopicsHidden && classNames.push('app--is-topics-hidden')
    return (
      <div className={classNames.join(' ')}>
        <Choise direction={direction} onSelect={this.handleSelectDirection} isShuffle={isShuffle} onSelectShuffle={this.handleSelectShuffle} isTopicsHidden={isTopicsHidden} onSelectHideTopics={this.handleSelectHideTopics} />

        <em>Tips! Klicka på de suddiga rubrikerna för att ta reda på kategorin</em>

        {categoryOrder.map(i => (
          <Category key={i} direction={direction} title={glossary[i].title} words={glossary[i].words} isShuffle={isShuffle} />
        ))}
      </div>
    );
  }
}

export default App;
