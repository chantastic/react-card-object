import React from 'react';

const styles = {
  float: 'left',
  fontSize: 12,
  marginBottom: 2
};

class BadgeList extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-BadgeList" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

BadgeList.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default BadgeList;
