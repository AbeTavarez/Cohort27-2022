const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

// GET: All Blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {blogs: blogs})
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// GET: Blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.send(blog)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// POST: CREATE a New Blog
router.post('/', async (req, res) => {
    try{
        const newBlog = await BlogModel.create(req.body)
        res.send(newBlog)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

// PUT: Update By ID
router.put('/:id', async (req, res)=> {
   try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' :"after"})
    res.send(updatedBlog)
   } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
   }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.send('Blog Deleted')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
    }
})

module.exports = router;