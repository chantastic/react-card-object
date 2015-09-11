var React = require('react');
var ReactCardObject = require('react-card-object');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactCardObject />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
