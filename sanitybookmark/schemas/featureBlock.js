export default {
    name: 'featureBlock',
    title: 'Feature Block',
    type: 'document',
    fields: [
        {
            title: 'Tab',
            name: 'tab',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Id',
            name: 'id',
            type: 'number',
            validation: Rule => Rule.required(),
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {
                    hotspot: true,
                },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: "url",
            title: "Url",
            type: "url",
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
    ],
}
