import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Word from './Word';
import './Category.css';

class Category extends Component {
  state = {
    isTopicHidden: true
  };

  toggleTopicVisibility = () => this.setState(({isTopicHidden}) => ({ isTopicHidden: !isTopicHidden }));

  render() {
    const { title, words, direction, isShuffle } = this.props;
    const { isTopicHidden } = this.state;
    const [ vocableIndex, correctIndex ] = direction === 'sv' ? [ 1, 0 ] : [ 0, 1 ];

    const wordIndexes = Array.from(Array(words.length).keys());
    const wordsOrder = isShuffle ? shuffle(wordIndexes) : wordIndexes;
    return (
      <div className="category">
        <h2 onClick={this.toggleTopicVisibility} className={'category-topic' + (isTopicHidden ? ' category-topic--is-hidden' : '')}>{title}</h2>
        {wordsOrder.map(wordIndex => <Word key={words[wordIndex][vocableIndex]} vocable={words[wordIndex][vocableIndex]} correct={words[wordIndex][correctIndex]} />)}
      </div>
    )
  }
}

export default Category;