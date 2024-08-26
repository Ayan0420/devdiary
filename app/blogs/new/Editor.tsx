"use client";
import React, { useContext } from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { uploadFiles } from "@/lib/uploadthing";
import { EditorContext } from "./context";

interface EditorProps {
    initialContent?: string;
    editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({ initialContent, editable }) => {
    const { blocks, setBlocks } = useContext(EditorContext);

    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
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
                onChange={() => {
                    // set blocks state with new content from editor
                    setBlocks(editor.document);
                }}
                theme="dark"
            />
        </div>
    );
};

export default Editor;
