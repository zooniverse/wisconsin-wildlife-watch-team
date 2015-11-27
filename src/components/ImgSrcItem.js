import React from 'react';

export default React.createClass({
  render: () => {
    return (
      <figure>
        <img src={this.props.item.imgSrc}/>
        <figcaption className="imgSrcDescription">{this.props.item.description}</figcaption>
      </figure>
    );
  }
});
