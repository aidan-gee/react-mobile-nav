
# mobile-nav

A mobile navigation component built using reactjs


## Demo & Examples

Live demo: [aidan-gee.github.io/react-mobile-nav](http://aidan-gee.github.io/react-mobile-nav/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Usage

Require and render where needed with the tag below. 

```
var MobileNav = require('react-mobile-nav');

<MobileNav/>
```

For example you could load it in your controller-view :

```
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
```

### Properties

TODO

### Notes

TODO's 

General clean up and more comments

Tidy up the demo with some css, icons and animations

Allow animation options for showing / hiding the nave and the accordian-like nav elements

Pass the nav data as a prop, allowing for the data to be passed in an attribute - see https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html

Allow a method of supplying a url to make an ajax call for initial state - see https://facebook.github.io/react/tips/initial-ajax.html

Port to react-native




## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).


Copyright (c) 2015 Aidan Gee &lt;aidangeewd@gmail.com.


