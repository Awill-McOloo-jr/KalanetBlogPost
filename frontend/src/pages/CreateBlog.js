import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CreateBlog() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [post, setPost] = useState('')




  useEffect(() => {
    fetchBlogs();
  }, [])
  const fetchBlogs = () => {
      axios
      .get('http://localhost:5000/blogs')
      .then((res) => {
        //console.log(res.data)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
    .post('http://localhost:5000/blogs', { title, preview, post })
    .then(() => {
      setTitle('')
      setPreview('')
      setPost('')
      fetchBlogs();
    })
    .catch((error) => {
      console.log('Unable to post blog')
    })
  }






  return (
    <div className='p-5 text-center bg-black text-white' >
      <h1 className='text-center text-2xl p-4 text-blue-700'>CREATE A BLOG</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/*  TITLE INPUT  */}
          <label>Title:</label>
          <br />
          
          <input className='border border-white bg-black w-[400px] h-[30px] rounded-xl p-2'
          type='text'
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
          <br />
          <br />
           {/*  PREVIEW INPUT  */}
           <label>Preview:</label>
          <br />
         
          <input className='border border-white bg-black w-[400px] h-[30px] rounded-xl p-2' 
          type='text'
          placeholder='Enter Preview'
          value={preview}
          onChange={(e) => setPreview(e.target.value)}/>
          <br />
          <br />
          {/*  POST INPUT  */}
          <label>Post:</label>
          <br />
          <textarea className='w-[650px] h-[400px] border border-white rounded-xl p-2 bg-black'
          
          placeholder='Enter Blog Here....'
          value={post}
          onChange={(e) => setPost(e.target.value)} />
          <br />
          <br />
          {/*  CREATE POST BUTTON */}
          <button className='border border-black w-[300px] h-[50px] bg-blue-700 hover:text-white' type='submit'>SUBMIT BLOG</button>
        
        
        
        </form>
      </div>
    </div>
  )
}

export default CreateBlog