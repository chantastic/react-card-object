import React from 'react';

const styles = {
  backgroundColor: 'white',
  boxShadow: '0 .0625em .125em -.0625em rgba(0,0,0,.3)',
  padding: '1em',
  borderRadius: '.25em',
  overflow: 'hidden'
};

class Card extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default Card;
