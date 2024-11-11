"use server"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getBlog = async (slug: string) => {
    const blog = await prisma.blogPost.findUnique({
        where: {
            slug: slug,
        },
        include: {
            authorUser: {
                select: {
                    name: true
                } 
            }
        }
    });
    
    
    return blog

}