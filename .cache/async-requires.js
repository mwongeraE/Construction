// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-single-project-js": () => import("../src/templates/singleProject.js" /* webpackChunkName: "component---src-templates-single-project-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-careers-js": () => import("../src/pages/careers.js" /* webpackChunkName: "component---src-pages-careers-js" */),
  "component---src-pages-contact-js": () => import("../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-projects-js": () => import("../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-services-js": () => import("../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */)
}

