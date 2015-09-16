import React from 'react';

const styles = {
  fontSize: '1.4em'
};

class Title extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-title" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

Title.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default Title;
