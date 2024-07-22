// import tools

import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Code from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';

const uploadImageByUrl = (e: any): {} => {
    let link = new Promise((resolve, reject) => {
        try {
            resolve(e)
        } catch (error) {
            reject(error)
        }
    })

    return link.then(url => {
        return {
            success: true,
            file: {
                url: url
            }
        }
    })
}

const uploadImageByFile = (e: any): {} => {
    let file = new Promise((resolve, reject) => {
        try {
            resolve(e)
        } catch (error) {
            reject(error)
        }
    })

    return file.then(result => console.log(result))
}

export const tools = {
    embed: Embed,
    list: {
        class: List,
        inlineToolbar: true,
    },
    image: {
        class: Image,
        config: {
            uploader: {
                uploadByUrl: uploadImageByUrl,
                uploadByFile: uploadImageByFile
            }
        }
    },
    header: {
        class: Header,
        config: {
            placeholder: 'Enter a heading ...',
            levels: [1, 2, 3],
            defaultLevel: 1,
        }
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
    },
    marker: Marker,
    inlineCode: InlineCode,
    code: Code,
}