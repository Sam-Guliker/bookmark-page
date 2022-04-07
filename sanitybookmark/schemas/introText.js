export default {
    name: 'contentBlock',
    title: 'Content Block',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required(),
        },
    ],
}
