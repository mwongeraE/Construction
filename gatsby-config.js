module.exports = {
  siteMetadata: {
    title: `Ortho Services`,
    fullTitle: `ORTHO SERVICES`,
    description: `Listen better | Plan better | Build better.`,
    activity: `ORTHO SERVICE is a research firm specializing in the field of assistance to businesses to major road works, construction of buildings, bridges and dams constructions of hydroelectric and many other areas.`,
    about: `The competence of our partner companies in order to ensure that the services we render are up to your expectations of treatment and reliability of our services and the way they are being followed up.`,
    email: `orthocommunication@gmail.com`,
    social: {
      facebook: `https://facebook.com/`,
      twitter: `https://twitter.com/`,
      instagram: `https://instagram.com/`,
      linkedin: `https://linkedin.com/in/`,
    },
    contact: {
      mobile: `+237 654 247 750 `,
      telephone: `M: 673 435 815 / D: 698 306 255 `,
      
    },
    address: `Yaounde Omnisport., Derière stage ahmadou, ahidjo`,
    map: `https://www.google.com/maps/embed/v1/place?key=AIzaSyCnWOq_LRf2fiN2X4M0n191axsBCBjAPJs&q=34+cybercity,Ebene+Mauritius`,
    // map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.590531801578!2d120.92931831483857!3d14.450745589898093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d282c1782f4f%3A0x62e247641b50bd21!2sBermuda%20Country%20Subdivision%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1566970336076!5m2!1sen!2sph`,
    opening: {
      day: `Monday - Friday`,
      hour: `8:00am - 5:00pm`,
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities provide employees with the ability to
      work on projects of all sizes and types and receive amazing
      benefits in return. They include but are in no way limited to:`,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        `Employee development programs`,
      ],
    },

    author: {
      name: `Mwongera Evans`,
      position: `Full Stack Developer`,
      email: `mwongera100@gmail.com`,
      contact: `(+254)-714-017-200`,
      website: `https://github.com/mwongeraE`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/layout.js`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/orthologo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
