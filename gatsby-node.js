const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;
  
  const result = await graphql(`
    {
      stories: allStrapiStory {
        edges {
          node {
            slug
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `)
  result.data.stories.edges.forEach(story => {
    let next, previous; 
    story.next ? next=story.next.slug : next=null; 
    story.previous ? (previous = story.previous.slug) : (previous = null) 

    createPage({
      path: `/stories/${story.node.slug}`,
      component: path.resolve(`src/templates/story-template.js`),
      context: {
        slug: story.node.slug,
        nextSlug: next,
        prevSlug: previous,
      },
    })
  });
		
	createRedirect({
    fromPath: `/story`,
    toPath: `/stories/beauty-of-abstraction`,
  })
}
