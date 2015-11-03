var React = require('react');
var apiData = require('./navData');
var classNames = require('classnames');

/*
 * Navigation Element  - A element of the navigation that can link to a url or show
 * a navigation list of child elements
 * 
 */
var NavElement = React.createClass({

	displayName: 'Navigation Element',

	getInitialState (){
		return {
		  show: false
		}
	},


  	handleClick () {

  		if(!this.props.el.isLeaf){
  			let visibility = this.state.show;
  			this.setState({show:!visibility});
  		}

  	},

	render () {

		let className = classNames({
	      "active": this.state.show
	    });

		return (
			<li key={this.props.el.URL}>
				<a onClick={this.handleClick}>{this.props.el.name} </a>
				<NavList nav={this.props.el.children || []} visibility={this.state.show}/>
			</li>
		);
	}

});


/*
 * Navigation List - A collection of navigation elements
 * 
 */
var NavList = React.createClass({

	displayName: 'Navigation List',

	render () {


		let className = classNames({
	      "active": this.props.visibility
	    });

		function navElements(el, i) {
			return (
				<NavElement el={el} key={i}/>
				);
		}
		

		return (
			<ul className={className}>
				{this.props.nav.map(navElements, this)}
			</ul>
		);
	}
});

/*
 * Toggle Button - Used to toggle the state of the visibility of the mobile
 * menu on click
 * 
 */
var ToggleButton = React.createClass({

	displayName: 'Toggle Button',

	render () {
		return <button onClick={this.props.toggleVisibility}>Toggle Menu</button>
	}

});

/*
 * Mobile Navigation - wrapper component to be rendered in the dom 
 */
var MobileNav = React.createClass({

	getInitialState (){
		return {
		  nav : [],
		  show: false
		}
	},

	componentWillMount (){
		this.setState({nav: apiData});
	},

	toggleVisibility(){
		var visibility = this.state.show;
		this.setState({show: !visibility});
	},
	
	render () {

		let className = classNames({
	      "wrapper": true
	    });

		return (
		<div className="mobile-nav">
			<ToggleButton toggleVisibility={this.toggleVisibility}/>
			<NavList nav={this.state.nav} visibility={this.state.show}/>
		</div>);
	}
});

export default MobileNav;
