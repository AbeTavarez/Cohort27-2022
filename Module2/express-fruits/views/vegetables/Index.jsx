const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegies</h1>

        <ul>
          {vegetables.map((vegetable, idx) => (
            <li key={idx}>
              {" "}
              The <a href={`/vegetables/${idx}`}>{vegetable.name}</a> is{" "}
              {vegetable.color} <br />
              {vegetable.readyToEat
                ? `It is ready to eat`
                : `It is not ready to eat`}
              <br />
              <a href={`/vegetables/${idx}`}>
                <img src={vegetable.image} width="300" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
