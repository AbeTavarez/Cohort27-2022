const React = require("react");

class Show extends React.Component {
  render() {
    const { vegetable } = this.props;
    return (
      <div>
        <h1>Vegie Show Page</h1>

        <div>
          <h2>The product name is {vegetable.name}</h2>

          <h3>The color is {vegetable.color}</h3>

          <h4>
            {vegetable.readyToEat
              ? "Its is ready to eat"
              : "It is not ready to eat... Cant touch this"}
          </h4>
        </div>
      </div>
    );
  }
}

module.exports = Show;
