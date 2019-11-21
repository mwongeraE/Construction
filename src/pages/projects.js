import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"
import Partners from "../components/partners"

const ProjectPage = ({ data }) => {
  return (
    <>
      <Project
        title="Completed Projects"
        projects={data.allProjectsJson.edges}
      />
      <Partners 
      title="Our partners"
      />
    </>
  )
}
export const projectsQuery = graphql`
  query AllProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          slug
          category
          description
          img {
            src
            orig
            author
          }
        }
      }
    }
  }
`
export default ProjectPage
