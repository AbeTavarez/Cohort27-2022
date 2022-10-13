const React = require("react");

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Blog App</title>
        </head>
        <nav style={styles.nav}>
          <a href='/'>HOME</a>
          <a href='/blog'>BLOGS</a>
          <div>
            <a href='/login'>Login</a>
          </div>
        </nav>
      </div>
    );
  }
}

const styles = {
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

module.exports = NavBar;
