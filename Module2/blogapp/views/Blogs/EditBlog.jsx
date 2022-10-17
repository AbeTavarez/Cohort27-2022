const React = require("react");

class EditBlog extends React.Component {
  render() {
    console.log(this.props.blog);
    const { blog } = this.props;
    return (
      <div>
        <h1>Edit Blog</h1>

        <form action={`/blog/${blog._id}?_method=put`} method='post'>
          <label htmlFor="title">Title</label>
          <input type="text" value={blog.title} name='title'/> <br />

          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            value={blog.body}
            rows="24"
            cols="50"
            name='body'
          ></textarea>{" "}
          <br />

          <label htmlFor="sponsored">Sponsored?</label>
          <input type='checkbox' name='sponsored' defaultChecked={blog.sponsored ? 'on': null}/><br />

          <input type='submit' value='Update Blog'/>

        </form>
        
        <form action={`/blog/${blog._id}?_method=delete`} method='post'>
            <input type='submit' value='Delete Blog' />
        </form>
      </div>
    );
  }
}

module.exports = EditBlog;
