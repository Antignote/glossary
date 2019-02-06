import React, { Component } from 'react';
import './Choise.css';

class Choise extends Component {

  handleDirectionSubmit = (event) => {
    this.props.onSelect(event.target.value);
  };

  handleShuffleSubmit = (event) => {
    this.props.onSelectShuffle(event.target.checked);
  };
  
  handleHideTopocs = (event) => {
    this.props.onSelectHideTopics(event.target.checked);
  };

  render() {
    const { direction, isShuffle, isTopicsHidden } = this.props;
    return (
      <div className="choise">
        <form className="choise-direction" onSubmit={this.handleDirectionSubmit}>
          <input type="radio" name="direction" value="lat" id="choiseLat" onChange={this.handleDirectionSubmit} checked={direction === 'lat'} />
          <label htmlFor="choiseLat">Latin - Svenska</label>
          <input type="radio" name="direction" value="sv" id="choiseSv" onChange={this.handleDirectionSubmit} checked={direction === 'sv'} />
          <label htmlFor="choiseSv">Svenska - Latin</label>
          <input type="radio" name="direction" value="mix" id="choiseMix" onChange={this.handleDirectionSubmit} checked={direction === 'mix'} disabled />
          <label htmlFor="choiseMix">Blandat</label>
        </form>

        <form className="choise-shuffle">
          <input type="checkbox" name="shuffle" value="shuffle" id="shuffle" onChange={this.handleShuffleSubmit} checked={isShuffle} />
          <label htmlFor="shuffle">Blanda kategorier och glosor</label>
        </form>

        <form className="choise-hide-topics">
          <input type="checkbox" name="hideTopics" value="hideTopocs" id="hideTopics" onChange={this.handleHideTopocs} checked={isTopicsHidden} />
          <label htmlFor="hideTopics">Göm rubriker</label>
        </form>
      </div>
    );
  }
}

export default Choise;
