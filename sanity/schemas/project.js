import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the project"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
     
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}],
    },
    {
      name: "linkToBuild",
      title: "Link To Build",
      type: "url",
    },
    
  ],

 
})
