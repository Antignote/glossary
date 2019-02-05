import React, { Component } from 'react';
import './Choise.css';

class Choise extends Component {

  handleSubmit = (event) => {
    this.props.onSelect(event.target.value);
  };

  render() {
    const { direction } = this.props;
    return (
      <form className="choise-direction" onSubmit={this.handleSubmit}>
        <input type="radio" name="direction" value="sv" id="choiseSv" onChange={this.handleSubmit} checked={direction === 'sv'} />
        <label htmlFor="choiseSv">Svenska - Latin</label>
        <input type="radio" name="direction" value="lat" id="choiseLat" onChange={this.handleSubmit} checked={direction === 'lat'} />
        <label htmlFor="choiseLat">Latin - Svenska</label>
        <input type="radio" name="direction" value="mix" id="choiseMix" onChange={this.handleSubmit} checked={direction === 'mix'} disabled />
        <label htmlFor="choiseMix">Blandat</label>
      </form>
    );
  }
}

export default Choise;
