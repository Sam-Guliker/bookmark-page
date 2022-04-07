export default {
    name: 'faqBlock',
    title: 'FAQ Block',
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
            options: {
                maxLength: 25,
            },
            validation: Rule => Rule.required()
        },
    ],
}
