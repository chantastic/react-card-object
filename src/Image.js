import React from 'react';

function styles (props) {
  return {
    minWidth: 'calc(100% + 2em)',
    margin: '-1em',
    marginBottom: '1em',
    backgroundImage: `url("${props.src}")`,
    height: 150, // props
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };
}

class Image extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles(this.props),
      this.props.style
    );
  }

  render () {
    return <div {...this.props} style={this.styles} />;
  }
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  src: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
};

export default Image;
