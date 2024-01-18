'use client'
import Layout from '../components/Layout'
import { useState } from 'react'

const newNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // submit form logic
  }
  return (
    <Layout>
      <div className='flex flex-col'>
        <h2 className='text-5xl'>Create a New Note</h2>
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 mx-3'>
            <label>
              Note Title:
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Note Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name='content'
              />
            </label>
            <label>
              Tags:
              <input
                type='text'
                name='tags'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            <button type='submit' className='border rounded-md border-black'>
              Submit Note
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default newNote
