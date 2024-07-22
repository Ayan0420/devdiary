"use client"
import EditorJS from '@editorjs/editorjs'
import { useEffect, useState, useContext } from 'react';
import { EditorContext } from './page';
import { tools } from './editorTools';


const Editor = () => {
     
    const { blog, setBlog }: any = useContext(EditorContext);
    console.log(blog)
    useEffect(() => {
        let editor = new EditorJS({
            holder: 'editorjs',
            data: blog.content,
            tools: tools,
            placeholder: 'Start writing your awesome blog ...',


        })
    }, []);


  return (
    <div>
        <div id='editorjs' className='blog-post w-full'></div>
    </div>
  )
}

export default Editor