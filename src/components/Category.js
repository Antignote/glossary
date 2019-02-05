import React, { Component } from 'react';
import Word from './Word';

class Category extends Component {
  render() {
    const { title, words, direction } = this.props;
    const [ vocableIndex, correctIndex ] = direction === 'sv' ? [ 0, 1 ] : [ 1, 0 ];
    return (
      <div>
        <h2>{title[vocableIndex]}</h2>
        {words.map(word => <Word key={word[vocableIndex]} vocable={word[vocableIndex]} correct={word[correctIndex]} />)}
      </div>
    )
  }
}

export default Category;