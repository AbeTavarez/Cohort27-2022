const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// Add Privacy to this router or routes
// Middleware function
router.use((req, res, next) => {
  if (req.session.loggedIn){
    next()
  } else {
    res.redirect('/user/signin')
  }
})

// GET: All Blogs
router.get("/",  async (req, res) => {
  console.log(req.session);
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs, loggedInUser: req.session.username });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Create Blog Form
router.get("/new", (req, res) => {
  try {
    res.render("Blogs/CreateBlog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Not found");
  }
});

// POST: CREATE a New Blog
router.post("/", async (req, res) => {
  try {
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    // set the author to the loggedIn user
    req.body.author = req.session.username
    const newBlog = await BlogModel.create(req.body);
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

// GET: Blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render("Blogs/ShowBlog", { blog: blog });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Render the Edit Form
router.get('/:id/edit', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('Blogs/EditBlog', {blog: blog})
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
})

// PUT: Update By ID
router.put("/:id", async (req, res) => {
  try {
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.redirect('/blog')
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
    console.log(deletedBlog);
    res.redirect('/blog');
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

module.exports = router;
