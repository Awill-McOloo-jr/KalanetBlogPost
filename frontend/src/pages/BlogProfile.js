import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UpadateForm from '../components/UpadateForm'

function BlogProfile() {
  const { id }  = useParams()
  const [blog, setBlog] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null)



  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = () => {
    axios.get(`http://localhost:5000/blogs/${id}`)
    .then((res) => {
      setBlog(res.data)
      //console.log(res.data)
    })

  }

  const handleUpdateClick = () => {
    setSelectedBlog(blog);
    
  }
  const handleUpdateDone = () => {
    setSelectedBlog(null)
    fetchBlogs();
  }
  return (
    <div className='p-6 h-[700px] bg-black text-white text-center'>
      <h1 className='text-center text-2xl text-blue-700'>Blog Profile</h1>
      <div className='relative'>
        {selectedBlog === blog && (
          <UpadateForm 
          id={id}
          InitialTitle={blog.title}
          InitialPreview={blog.preview}
          InitialPost={blog.post}
          onUpdate={handleUpdateDone}/>
        )}
        <h4 className='text-xl p-5'>Title: {blog.title}</h4>
        <br />
        <br />
        <span className='p-4'>Preview:{blog.preview}</span>
        <br />
        <br />
        <p className='p-4'>Post:{blog.post}</p>
        <br />
        <span>Created:{blog.createdAt}</span>
        <div>
          <button className='absolute top-0 left-0 w-[150px] h-[50px] border bg-white text-black border-white hover:bg-blue-700 hover:text-white' 
          onClick={handleUpdateClick}>Update Blog</button>
        </div>
      </div>
    </div>
  )
}

export default BlogProfile