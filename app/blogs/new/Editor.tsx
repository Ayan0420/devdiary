"use client";
import React, { useContext, useEffect, useState } from "react";
import { BlockNoteSchema, BlockSchemaFromSpecs, defaultBlockSpecs, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { uploadFiles } from "@/lib/uploadthing";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { EditorContext } from "./context";
// import { Edit } from "lucide-react";

interface EditorProps {
    initialContent?: string;
    editable?: boolean;
}



const Editor: React.FC<EditorProps> = ({ initialContent, editable }) => {
    
    const { blocks, setBlocks, blocksMD, setBlocksMD } = useContext(EditorContext);
    
    const { video, audio, file, checkListItem, ...remainingBlockSpecs } = defaultBlockSpecs;

    const schema = BlockNoteSchema.create({
        blockSpecs: {
        // Adds all default blocks.
        ...remainingBlockSpecs
        },
    });
    

    // useEffect(() => {
    //     console.log(blocks);
    //     console.log(typeof blocks)
    // }, [blocks]);

    const editor = useCreateBlockNote({
        schema,
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock<BlockSchemaFromSpecs<typeof remainingBlockSpecs>>[])
            : undefined,
        // uses uploadthing to upload files
        uploadFile: async (file: File) => {
            const [res] = await uploadFiles("imageUploader", { files: [file] });
            return res.url;
        },
    });

    return (
        <div className="-mx-[54px] my-4">
            <BlockNoteView
                editor={editor}
                editable={editable}
                onChange={async () => {
                    // set blocks state with new content from editor
                    setBlocks(editor.document);
                    setBlocksMD(await editor.blocksToMarkdownLossy(editor.document));
                }}
                theme="dark"
            />

            
        </div>
    );
};


export default Editor;
