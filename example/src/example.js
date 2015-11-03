var React = require('react');
var ReactDom = require('react-dom');
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

ReactDom.render(<App />, document.getElementById('app'));
