import React from 'react'
import Editor from './Editor'

const page = () => {
  return (
    <main className='container mx-auto min-h-screen py-10'>
        <h1 className='text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground-dark mb-5'>Create New Post</h1>
        <Editor />
    </main>
  )
}

export default page