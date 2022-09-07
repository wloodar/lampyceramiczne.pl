import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Technical = defineNestedType(() => ({
    name: 'technical',
    fields: {
        height: { type: 'string', required: false },    
        widthShade: { type: 'string', required: false },
    }
}))

export const LampPage = defineDocumentType(() => ({
    name: 'Lamp',
    filePathPattern: 'lamps/*.mdx',
    fields: {
        title: { type: 'string', required: true },
        shortDescription: { type: 'string', required: false },
        date: { type: 'string', required: true },
        cover: { type: 'string', required: true },
        technical: {
            type: 'list',
            of: Technical
        }
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: doc => doc._raw.sourceFileName.replace('.mdx', ''),
        },
    },
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [LampPage],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
    disableImportAliasWarning: true,
})
