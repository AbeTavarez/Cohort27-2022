const React = require("react");

class Index extends React.Component {
  render() {
    const {fruits} = this.props
    return (
      <div>
        <h1>All Fruits</h1>
        <a href='/fruits/new'>Create New Fruit</a>

        <ul>
          {fruits.map((fruit, idx) => (
            <li>
              The <a href={`/fruits/${idx}`}>{fruit.name}</a> is {fruit.color}{" "}
              <br />
              {fruit.readyToEat
                ? `It is ready to eat`
                : `It is not ready to eat`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
