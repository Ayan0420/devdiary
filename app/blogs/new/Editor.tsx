"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

export default function Page() {
  const [content, setContent] = useState(testContent);
  console.log(content);
  
  useEffect(() => {
    hljs.configure({
      languages: ['javascript', 'typescript', 'python', 'ruby', 'go', 'java', 'c', 'cpp', 'css', 'html', 'json', 'bash'], // add more languages as needed
      cssSelector: "pre" 
    });
  }, []);

  useEffect(() => {

    hljs.highlightAll();

  }, [content]);


  // Customize the toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  return (
    <div className="">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="h-[500px]"
        />

      <h1 className="text-2xl font-bold mt-20 border-b-2 py-5">Preview</h1>
      <div className="blog-post min-h-[500px]">
      
        {parse(content)}
      </div>
    </div>
  );
}


const testContent = `

`