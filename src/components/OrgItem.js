import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="team-member">
        <h3>{this.props.item.name}</h3>
        <img src={this.props.item.imgSrc}/>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
});
