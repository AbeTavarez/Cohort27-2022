const React = require("react");

class Blogs extends React.Component {
  render() {
    const { blogs } = this.props;
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <h1>Blogs</h1>

        <section style={styles.container}>
          {blogs.map((blog) => (
            <div style={styles.wrapper} className="card">
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div>
                <p>{blog.body}</p>
              </div>
              <h6>Written by: {blog.author}</h6>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wrapper: {
    padding: "20px",
    margin: "10px",
    width: "300px",
    border: "solid",
    borderWidth: "2px",
    borderColor: "black",
  },
};
module.exports = Blogs;
