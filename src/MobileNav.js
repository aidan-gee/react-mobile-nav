var React = require('react');


/*
 * Navigation Element  - A element of the navigation that can link to a url or show
 * a navigation list of child elements
 * 
 */
var NavElement = React.createClass({

	displayName: 'Navigation Element',

	render () {
		return <li>el</li>
	}

});


/*
 * Navigation List - A collection of navigation elements
 * 
 */
var NavList = React.createClass({

	displayName: 'Navigation List',

	render () {
		return <ul>list</ul>
	}
});

/*
 * Toggle Button - Used to toggle the state of the visibility of the mobile
 * menu on click
 * 
 */
var ToggleButton = React.creatClass({

	displayName: 'Toggle Button',

	render () {
		return <span>icon</span>
	}

});

/*
 * Mobile Navigation - wrapper component to be rendered in the dom 
 */
var MobileNav = React.createClass({
	
	render () {
		return <div>mobile-nav</div>;
	}
	
});

export default MobileNav;
