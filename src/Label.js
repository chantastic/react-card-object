import React from 'react';

const styles = {
  display: 'inline-block',
  height: 10,
  width: '17.5%',
  marginRight: '2.5%',
  borderRadius: 4
};

class Label extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return <div className="ReactCard-Label" {...this.props} style={this.styles} />;
  }
}

Label.propTypes = {
  children: React.PropTypes.node,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default Label;
