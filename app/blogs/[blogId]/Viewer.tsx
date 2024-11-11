"use client";
import React, { useEffect, useState } from "react";
import { BlockNoteSchema, defaultBlockSpecs, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

import markdownit from 'markdown-it'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.css';

interface ViewerProps {
    initialContent: string;
}

// const schema = BlockNoteSchema.create({
//     blockSpecs: {
//       // Adds all default blocks.
//       ...defaultBlockSpecs
//     },
//   });

// const Viewer: React.FC<ViewerProps> = ({ initialContent }) => {
//     const { theme } = useTheme()
    
//     const editor = useCreateBlockNote({
//         schema,
//         initialContent: initialContent
//             ? (JSON.parse(initialContent) as PartialBlock[])
//             : undefined,
//     });

//     return (
//         <div className="-mx-[54px] my-4">
//             <BlockNoteView
//                 editor={editor}
//                 editable={false}
//                 onChange={() => {}}
//                 theme={theme as "light" | "dark"}
//             />
//         </div>
//     );
// };

const Viewer: React.FC<ViewerProps> = ({ initialContent }) => {

    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll()
    }, [initialContent]);


    const md = markdownit();

    return (
        
        <article className="prose dark: prose-invert max-w-full my-4" dangerouslySetInnerHTML={{ __html: md.render(initialContent) }}>
            
        </article>
        
    );
};

export default Viewer;
