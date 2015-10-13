var React = require('react');
var MobileNav = require('react-mobile-nav');

var App = React.createClass({
	render () {
		return (
			<div>
				<MobileNav />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
