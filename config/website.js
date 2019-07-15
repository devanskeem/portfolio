const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Devan Skeem',
  siteTitleAlt: 'Devan Skeem Portfolio', 
  siteTitleShort: 'DevSkeem',
  siteHeadline: 'Creating beautiful and innovative websites',
  siteUrl: 'https://devanskeem.com',
  siteLanguage: 'en',
  siteLogo: '../public/favicons/headshot-square-150px.png',
  siteDescription: 'Playful & Colorful One-Page portfolio website with Parallax effect',
  author: 'devanskeem',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
