"use client"
import React, { createContext, useEffect, useState } from 'react'
import Editor from './Editor'

const blogStructure = {
  title: "",
  // banner: "",
  content: "",
  // tags: [],
  description: "",
  // author: {}
}

export const EditorContext = createContext({});

const page = () => {

  const [blog, setBlog] = useState(blogStructure);

  useEffect(() => {
    console.log(blog)
  }, [blog])

  return (
    <EditorContext.Provider value={{blog, setBlog}}>
        <main className='container mx-auto min-h-screen py-10'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground-dark mb-5 '>Create New Post</h1>

        </div>
          <Editor />
      </main>
    </EditorContext.Provider> 
  )
}

export default page