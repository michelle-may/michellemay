const { DateTime } = require("luxon");

module.exports = eleventyConfig => {

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')
  eleventyConfig.addLayoutAlias('case-study', 'layouts/case-study.html')

  // Include our static assets
  //eleventyConfig.addPassthroughCopy('./src/assets/images')
  eleventyConfig.addPassthroughCopy("_headers");

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