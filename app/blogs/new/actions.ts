'use server'

import { Block } from "@blocknote/core"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const generateSlug = async (title: string) : Promise<string> => {
    // to ensure the slug has no special characters and whitespaces
    let slug = new Date().toISOString().split('T')[0] + '-' + title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    // to ensure slug is unique by checking if the same title exists and appending the count
    const existingPostCount =  await prisma.blogPost.count({ where: { title } });
    slug = `${slug}-${existingPostCount}`;

    return slug;
}

interface Post {
    title: string
    description: string
    contentBlocks: Block[]
}

export async function createPost({title, description, contentBlocks}: Post) {
    
    const post = {
        title,
        slug: await generateSlug(title),
        description,
        content: contentBlocks
    }

    await prisma.blogPost.create({
        data: post
    })

    return true
}