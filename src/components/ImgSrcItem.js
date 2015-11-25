import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <figure>
        <img src={this.props.item.imgSrc}/>
        <figcaption className="imgSrcDescription">{this.props.item.description}</figcaption>
      </figure>
    );
  }
});
