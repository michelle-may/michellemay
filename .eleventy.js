const { DateTime } = require("luxon");

module.exports = eleventyConfig => {

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')
  eleventyConfig.addLayoutAlias('base-cs', 'layouts/base-cs.html')
  eleventyConfig.addLayoutAlias('case-study', 'layouts/case-study.html')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html')

  // Include our static assets
  //eleventyConfig.addPassthroughCopy('./src/assets/images')
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/favicon.svg");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");

  // Fix date output
  eleventyConfig.addFilter("workDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('y')
  })

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