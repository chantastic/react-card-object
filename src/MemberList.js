import React from 'react';

const styles = {};

class MemberList extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-MemberList" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

MemberList.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default MemberList;
