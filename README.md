# Gatsby-Strapi Portfolio

## Overview 
Personal portfolio project made following John Smilga's [tutorial](https://www.youtube.com/watch?v=Oc_ITwxiG-Y&feature=youtu.be) found on the freecodecamp [youtube channel](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ)

**This project uses**
- [React](https://reactjs.org/) 
- [GraphQL](https://graphql.org/)
- [GatsbyJS](https://www.gatsbyjs.org/) *(static stie generator)*
- [Strapi](https://strapi.io/) *(headless CMS)*

**Libraries / Plugins**
- [React Icons](https://react-icons.github.io/react-icons/)
- [Gastby Source Strapi](https://www.gatsbyjs.org/packages/gatsby-source-strapi/?=strapi) *(for accesing strapi data via gatsby)* 
- [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) *([createPages](https://www.gatsbyjs.com/docs/node-apis/#createPages) - to create blog page templates)*
- [React Markdown](https://www.npmjs.com/package/react-markdown) *(markdown rendering for blog posts)*
- [Strapi Provider Upload Cloudinary](https://www.npmjs.com/package/strapi-provider-upload-cloudinary) *(connects strapi to cloudinary image store)*

**Other Junk**
- [Hipster Ipsum](https://hipsum.co/) *(dummy text)*
- [Cloudinary](https://cloudinary.com/) *(image storage for production)*
- [Form Spree](https://formspree.io/) *(form gathering data from contact form)*
    - *alternatively - you could replace this with [Netlify Forms](https://www.netlify.com/products/forms/) if that's where you end up deploying*

## Development
### Front End
For a dev server run either:
- `gatsby develop` 
- `gatsby clean && gatsby develop`

Gatsby Site: http://localhost:8000

Graph*i*QL: http://localhost:8000/___graphql


### Back End
For Strapi Development run:
- `npm run develop`

Server: http://localhost:1337/

Admin: http://localhost:1337/admin/

### Strapi / Cloudinary Connection
To connect Strapi to Cloudinary, rename `settings-placeholder.json` to `settings.json` and replace variables as needed
- file is found in `extensions/upload/config/` in the api portion of the project
- also see *[strapi-provider-upload-cloudinary](https://www.npmjs.com/package/strapi-provider-upload-cloudinary)* 