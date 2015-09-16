import React from 'react';

const styles = {
};

class LabelList extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-LabelList" {...this.props} style={this.styles}>
        {this.props.children}
      </div>
    );
  }
}

LabelList.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default LabelList;
