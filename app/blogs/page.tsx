import PostCard from '@/app/PostCard'
import React from 'react'

const page = () => {
  return (
    <main className='container mx-auto min-h-screen mb-10'>
        <section id='heading' className='my-10'>
            <h1 className='text-4xl'>Explore the Journey of Developers</h1>
            <p className='text-lg mt-2'>
            Discover the latest insights, projects, and experiences from the world of developers.
            </p>
        </section>
        <section id='main' className='grid grid-cols-1 md:grid-cols-12 gap-4'>
            <div className='col-span-8 flex flex-col gap-4'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='col-span-4 bg-stone-900'>
                Side bar
            </div>
        </section>
    </main>
  )
}

export default page