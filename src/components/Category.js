import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Word from './Word';

class Category extends Component {
  render() {
    const { title, words, direction, isShuffle } = this.props;
    const [ vocableIndex, correctIndex ] = direction === 'sv' ? [ 0, 1 ] : [ 1, 0 ];

    const wordIndexes = Array.from(Array(words.length).keys());
    const wordsOrder = isShuffle ? shuffle(wordIndexes) : wordIndexes;
    return (
      <div>
        <h2>{title[vocableIndex]}</h2>
        {wordsOrder.map(wordIndex => <Word key={words[wordIndex][vocableIndex]} vocable={words[wordIndex][vocableIndex]} correct={words[wordIndex][correctIndex]} />)}
      </div>
    )
  }
}

export default Category;