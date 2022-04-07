export default {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        {
            name: "browser",
            title: "Browser",
            type: "string",
            options: {
                maxLength: 25,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()     
        },
        {
            name: "url",
            title: "Url",
            type: "url",
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
                options: {
                    maxLength: 25,
                },
            validation: Rule => Rule.required()
        },
        {
            title: "image",
            name: "Image",
            type: "image",
            options: {
                    hotspot: true,
                },
        },
    ],
}
