const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const bodyParser = require ('body-parser')
const Blog = require('./models/blogSchema')



//connect to express app
const app = express();

//connect to mongoDB
mongoose.connect('mongodb+srv://Twilliams:Twilliams21@cluster0.yh2jemn.mongodb.net/Kalanet-Blogs?retryWrites=true&w=majority')
.then(app.listen(5000, console.log('App running on port 5000 MongoDb connected')))
.catch((error) => {
    console.log(error)
})



//middlewares
app.use(cors())
app.use(bodyParser.json())



//Routes
    //GET ALL Blogs
    app.get('/blogs', (req,res) =>{
        const blogs = Blog.find()
        .then((blogs)=>{
            res.json(blogs)
        })
        .catch((error) => {
            res.json({message:'Unable to get Blogs', error})
        })
    })


    //POST BLOG
    app.post('/blogs', (req,res) => {
        const { title, preview, post } = req.body
        const blog = new Blog({ title, preview, post })
        blog.save()
        .then((blog) => {
            res.json({message: 'Blog was created successfully!!'})
        })
        .catch((error) => {
            res.json({message:'Unable to create Blog'})
        })
    })


    //GET A SINGLE BLOG BY ID.
    app.get('/blogs/:id', (req,res) => {
        const { id } = req.params
        const singleBlog = Blog.findById(id)
        .then((singleBlog) => {
            res.json(singleBlog)
        })
        .catch((error) => {
            res.json({message: 'Unable to get a single blog!', error})
        })
    })

    //UPDATE A BLOG.
    app.put('/blogs/:id', (req,res) => {
        const {id} = req.params
        const { title,preview, post } = req.body
        const updatedBlog = Blog.findByIdAndUpdate(id, 
            {title, preview, post},
            {value: true})
        .then((updatedBlog) => {
            res.json({message: 'Blog successfully updated!!'})
            
        })
        .catch((error) => {
            res.json({message: 'Error Updating the Blog'})
        })
    })

    //DELETE A  BLOG
    app.delete('/blogs/:id', (req,res) => {
        const { id } = req.params
        const deletedBlog = Blog.findByIdAndDelete(id)
        .then((deletedBlog) => {
            res.json({message: 'Blog Successfully Deleted!!'})
        })
        .catch((error) => {
            res.json({message:'Unable to delete blog!!! '})
        })
    })








