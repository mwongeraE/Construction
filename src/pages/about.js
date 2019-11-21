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
    `ORTHO SERVICE is a multinational represented so far in four African countries (Cameroon, Nigeria, Benin and Togo), the United Arab Emirates with an office in Dubai and will soon open a design office in China.`,
    `We encourage companies around the world and countries in which we operate to respond to national and international calls for tenders launched in the framework of the realization of major projects existing today in Sub-Saharan Africa.`,
    `Our office guarantees to all our partners a perfect setting for the job, discretion and full-time support of engineers with a good knowledge of the field and its realities which are very often different in different environments.`,
    `We provide our partners with a follow-up which gives us a good reputation in terms of success in cases related to national or international tenders for which, companies, are monitored by ORTHO SERVICES.`,
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
                  <strong>{fullTitle} </strong>
                  Founded in 2010 , Ortho Services is a young trading company in charge of study and achievement in road-construction hydro electric dams -Work Building. Our goal is to support companies in their ability to respond to calls for national and international tenders, to ride their bidding documents (DAO), to ensure the study and monitoring. But even more, we provide the perfect outsourcing to our clients to support them in the process of realization of construction works, small, medium or large.
                  We work with engineering and technical courses at the height of great achievement and extensive work. We operate in the motivation that we give to local and international companies to meet current needs work. 
                  <br/>
                  </p>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Objective">
                <p>
                  Ortho services  aims at providing medium and long term assurance
                  to local and foreign companies and also the ability to complete
                  the work. We promote the exchange of experiences in the provision 
                  of services and new technology in Africa. Africa being a continent
                  of wide projects, we invite companies who are able to demonstrate their
                  expertise and contribute to its development. They can trust 
                  in us and become our partner in the realization of this development. 
                  Ortho-Services has chosen to organize its work around a central 
                  concept: That of performance.

                  Beyond the provision of services, commonly secure, we propose to you a real 
                  process of building an oriented operational cooperation
                  relationship which will be sustainable, equitable and respectful through-out
                  each course of your project. We analyze your needs so as to target your exact 
                  expectations.
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
