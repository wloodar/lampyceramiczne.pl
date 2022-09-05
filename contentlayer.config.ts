import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const LampPage = defineDocumentType(() => ({
    name: 'Lamp',
    filePathPattern: 'lamps/*.mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'string', required: true },
        cover: { type: 'string', required: true },
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
