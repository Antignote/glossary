import React, { Component, Fragment } from 'react';
import Category from './Category';
import Choise from './Choise';
import { shuffle } from 'lodash';
import './App.css';

class App extends Component {
  state = {
    direction: 'sv',
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
    ]
  }

  handleSelectDirection = (direction) => {
    this.setState({ direction });
  };

  render() {
    const { direction, glossary } = this.state;
    const categoryOrder = shuffle(Array.from(Array(glossary.length).keys()));
    const randomIndex = 1;
    const category = glossary[randomIndex];
    return (
      <Fragment>
        <Choise direction={direction} onSelect={this.handleSelectDirection} />
        {categoryOrder.map(i => (
          <Category key={i} direction={direction} title={glossary[i].title} words={glossary[i].words} />
        ))}
      </Fragment>
    );
  }
}

export default App;
