import React from 'react';

export default React.createClass({
  render() {
    return (
      <figure>
        <img src={this.props.item.imgSrc} alt={this.props.item.description}/>
        <figcaption className="imgSrcDescription">{this.props.item.description}</figcaption>
      </figure>
    );
  }
});
