import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="teamItem">
        <h3 className="teamName">{this.props.item.name}</h3>
        <img src={this.props.item.imgSrc}/>
        <p className="teamDescription">{this.props.item.description}</p>
      </div>
    );
  }
});
