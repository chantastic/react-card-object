import React from 'react';

function firstAndLast (item, i, all) {
  if(i === 0 || i === all.length - 1) {
    return item;
  }
}

function firstCharacters (item) {
  return item.slice(0, 1);
}

function initials (name) {
  return name.split(' ').map(firstAndLast).map(firstCharacters).join('');
}

const styles = {};

class Member extends React.Component {
  get styles () {
    return Object.assign(
      {},
      !this.props.noStyle && styles,
      this.props.style
    );
  }

  render () {
    return (
      <div className="ReactCard-Member" {...this.props} style={this.styles}>
        {initials(this.props.name)}
      </div>
    );
  }
}

Member.propTypes = {
  children: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
  noStyle: React.PropTypes.bool,
  style: React.PropTypes.object
};

export default Member;
