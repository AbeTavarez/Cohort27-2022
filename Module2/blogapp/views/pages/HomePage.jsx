const React = require("react");
// const bg = require('../../public/bg.png')

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="http://localhost:3000/public/CSS/app.css" />
        </head>
        <h1>Welcome to my Blog App</h1>

        {/* <img src={bg} height="300px"/> */}
      </div>
    );
  }
}

module.exports = HomePage;
