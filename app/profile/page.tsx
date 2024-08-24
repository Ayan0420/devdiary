import React from 'react'
import { PrismaClient } from '@prisma/client'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import PostCard from '../PostCard'

const prisma = new PrismaClient()

const page = async () => {

  const session = await auth();

  if (!session?.user) return redirect("/login");

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id
    }
  })
  

  return (
    <main className='container min-h-screen py-4'>
        <div className='col-span-6'>
            <h1 className='text-3xl font-bold text-center my-3'>My Blogs</h1>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
              <div className='flex flex-col items-center gap-3'>
                <Image src={user?.image as string} alt={user?.name as string} width={100} height={100} className="text-center rounded-full" />
                <h1 className='text-xl font-bold'>{user?.name}</h1>
              </div>
            </div>
            <div className='col-span-8 py-3 flex flex-col gap-3'>
              <PostCard  />
              <PostCard  />
              <PostCard  />
            </div>
        </div>
    </main>
  )
}

export default page