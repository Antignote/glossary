import React, { Component, Fragment } from 'react';
import Category from './Category';
import Choise from './Choise';
import { shuffle } from 'lodash';
import './App.css';

class App extends Component {
  state = {
    direction: 'sv',
    isShuffle: false,
    glossary: [
      {
        title: ['Calva', 'Hjärnskål'],
        words: [
          ['Os frontale', 'Pannben'],
          ['Os parietale', 'Hjässben'],
          ['Os temporale', 'Tinningben'],
          ['Os sphenoidale', 'Kilben'],
          ['Os ethmoidale', ' Silben'],
          ['Os occipitale', 'Nackben'],
        ]
      },
      {
        title: ['Viscerocranium', 'Ansiktsskelett'],
        words: [
          ['Tungben',	'Os hyoideum'],
          ['Hammaren',	'Malleus'],
          ['Städet',	'Incus'],
          ['Stigbygeln',	'Stapes'],
        ]
      }
    ],
  }

  handleSelectDirection = (direction) => {
    this.setState({ direction });
  };

  handleSelectShuffle = (isShuffle) => {
    this.setState({ isShuffle });
  };

  render() {
    const { direction, glossary, isShuffle } = this.state;
    const categoryIndexes = Array.from(Array(glossary.length).keys());
    const categoryOrder = isShuffle ? shuffle(categoryIndexes) : categoryIndexes;
    return (
      <Fragment>
        <Choise direction={direction} onSelect={this.handleSelectDirection} isShuffle={isShuffle} onSelectShuffle={this.handleSelectShuffle} />
        {categoryOrder.map(i => (
          <Category key={i} direction={direction} title={glossary[i].title} words={glossary[i].words} isShuffle={isShuffle} />
        ))}
      </Fragment>
    );
  }
}

export default App;
