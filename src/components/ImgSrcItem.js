import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <figure className="imgSrcItem">
        <img src={this.props.item.imgSrc}/>
        <p className="imgSrcDescription">{this.props.item.description}</p>
      </figure>
    );
  }
});
