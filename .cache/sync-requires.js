const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-project-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/templates/singleProject.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/evans/Documents/Construction/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/about.js"))),
  "component---src-pages-careers-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/careers.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/page-2.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/projects.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/evans/Documents/Construction/src/pages/services.js")))
}

