module.exports = eleventyConfig => {

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')

  // Include our static assets
  // eleventyConfig.addPassthroughCopy('./src/assets/images')

  // Refresh browser when assets are updated via parcel
  eleventyConfig.setBrowserSyncConfig({
    files: [
      'public/assets/css',
      'public/assets/js'
    ]
  });

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