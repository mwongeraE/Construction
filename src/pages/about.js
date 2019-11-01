import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/actu2.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `ORTHO SERVICE is a multinational Represented so far in four African countries (Cameroon, Nigeria, Benin and Togo), the United Arab Emirates with an office in Dubai and will soon ouvert has office in China design. `,
    `We encourage companies and countries around the world we operate in qui to responds to national and international calls for tenders lancé in the framework of the realization of major projects Existing today in Sub-Saharan Africa.`,
    `Our office, Guarantees to all our partners a perfect setting for the job, discretion and full-time holder of engineers with a good knowledge of the field and Its qui realities are very different Often in different environments.`,
    `We provide our partners with a follow-up qui Gives us a good reputation in terms of success in cases related to national or international tenders for qui, companies, monitored by ORTHO SERVICES tendered.`,
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  <strong>{fullTitle} </strong>Founded in 2010 , Ortho Services
                  is a young trading company in charge of study and achievement
                  in road-construction building -Work of hydroelectric dams.
                  Our goal is to support companies in their ability to respond
                  to calls for national and international tenders, to ride their
                  bidding documents (DAO), to ensure the study and monitoring.
                  But even more, we provide the perfect outsourcing to our clients
                  to support them in the process of realization of construction works,
                  small, medium or large.
                  We work with engineering and technical courses for high achievement
                  height and extensive work. We operate in the motivation that we give
                  to local and international companies to meet current needs work. 

                  <br/>
                  </p>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Objective">
                <p>
                  Ortho AIMS providing good services at medium and long term assurance
                  to local and foreign companies and aussi the Ability to Complete
                  the work and Promote the exchange of experience in the provision 
                  of services and new technology in Africa. Africa continent of being  
                  white has wide project, we invite companies Who are reliable to Demonstrate 
                  Their expertise and contribuer to the development, to trust 
                  in us and Become our partner in the realization of this development. 
                  Ortho-have services Chosen to icts workaround organizes a central 
                  concept: That of performance.

                  Beyond the provision of services Commonly secure, we propose to you a real 
                  process of building, oriented operational year cooperation
                  relationship qui will be sustainable, equitable and respectful through, 
                  out Each course of your project. We analyze your needs so you
                  expect to target your focus.
                </p>
              </AboutCard>
              
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
