module.exports = eleventyConfig => {

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')

  // Include our static assets
  // eleventyConfig.addPassthroughCopy('./src/images')


  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,

    dir: {
      input: "src",
      output: "public"
    }
  }
}