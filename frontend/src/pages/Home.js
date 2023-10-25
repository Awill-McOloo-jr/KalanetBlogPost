import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetchBlogs()
  }, [])
  const fetchBlogs = () => {
    axios
    .get('http://localhost:5000/blogs')
    .then((res) => {
      setBlogs(res.data)
      //console.log(res.data)
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/blogs/${id}`)
    .then(() => {
      fetchBlogs();
    })
    .catch((error) => {
      console.log('Unable to delete blog', error)
    })
  }

  return (
    
    <div className='p-5 text-center bg-black text-white h-[700px]'>
      <h1 className='text-center text-2xl p-6'>Home</h1>
      <div className='border-b border-white '>
          {
            blogs.map(blog => 
              <div key={blog._id} className='border-t p-4 relative'>
                <Link to={`/blogs/${blog._id}`}>
                  <h4>{blog.title}</h4>
                  <span>{blog.preview}</span>
                
                </Link>
                <div className='absolute top-1 right-0 border border-black w-[40px] rounded-full hover:bg-red-700 hover:text-white'>
                  <button onClick={() => handleDelete(blog._id)} className='font-bold'>X</button>
                </div>
              </div>)
          }
      </div>
    </div>
  )
}

export default Home