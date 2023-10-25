import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UpadateForm({ id, InitialTitle, InitialPreview, InitialPost, onUpdate }) {
    const [blogs, setBlogs] = useState([])
    const [title, setTitle] = useState(InitialTitle)
    const [preview, setPreview] = useState(InitialPreview)
    const [post, setPost] = useState(InitialPost)

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = () => {
        axios.get('http://localhost:5000/blogs')
        .then((res) => {
            setBlogs(res.data)
            console.log(res.data)
        })
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:5000/blogs/${id}`, { title, preview, post })
        .then(() => {
            onUpdate()
        })
        .catch((error) => {
            console.log('Unable to Update Blog!')
        })
    }
  return (
    <div>
                  {/* TITLE */}
        <input className='border border-white bg-black w-[400px] h-[30px] rounded-xl p-2'
        type='text'
        placeholder='edit title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <br />
                     {/* PREVIEW */}
        <input className='border border-white bg-black w-[400px] h-[30px] rounded-xl p-2'
        type='text'
        placeholder='edit preview'
        value={preview}
        onChange={(e) => setPreview(e.target.value)}/>
        <br />
        <br />
                     {/* POST*/}
        <textarea className='w-[650px] h-[400px] border border-white rounded-xl p-2 bg-black' 
        
        placeholder='edit post'
        value={post}
        onChange={(e) => setPost(e.target.value)}/>

        <br />
        <br />
          {/*  CREATE POST BUTTON */}
          <button className='border border-black w-[300px] h-[50px] bg-blue-700 hover:text-white' onClick={handleUpdate}>UPDATE BLOG</button>
        
    </div>
  )
}

export default UpadateForm