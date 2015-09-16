import React from 'react';

const styles = {
  display: 'inline-block',
  marginRight: '.75em',
};

class Badge extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-Badge" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

Badge.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default Badge;
