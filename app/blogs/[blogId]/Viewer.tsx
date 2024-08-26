"use client";
import React from "react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";

interface ViewerProps {
    initialContent?: string;
}

const Viewer: React.FC<ViewerProps> = ({ initialContent }) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
    });

    return (
        <div className="-mx-[54px] my-4">
            <BlockNoteView
                editor={editor}
                editable={false}
                onChange={() => {}}
                theme="dark"
            />
        </div>
    );
};

export default Viewer;
