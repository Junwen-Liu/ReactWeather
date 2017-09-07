var React = require('react');


var About = (props) => {
	return (
	<div>
      <h1 className ="text-center">About</h1>
      <p>This is a weather application build on React. This is complete React Web App</p>
      <p>Here are some tools we users:</p>
      <ul>
      	<li>
      		<a href="https://facebook.github.io/react">React</a> - This was the JavaScropt framework used.
      	</li>
      	<li>
      		<a href="http://openweathermap.org">Open Weather Map</a> - used this link to search.
      	</li>
      </ul>
     </div>
    )
}

module.exports = About;
