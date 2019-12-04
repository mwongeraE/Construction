import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import PageHeader from "../components/pageHeader"
import Service from "../components/service"
import Activities from "../components/activities"

import truck from "../images/icons/truck.png"
import painter from "../images/icons/painter.png"
import stair from "../images/icons/stair.png"
import map from "../images/icons/map.png"
import blueprint from "../images/icons/blueprint.png"
import environment from "../images/icons/environment.png"
import work from "../images/icons/work.png"
import water from "../images/icons/water.png"
import power from "../images/icons/power.png"
import powerplant from "../images/icons/power-plant.png"
import molecule from "../images/icons/molecular.png"
import dig from "../images/icons/dig.png"


const ServicesPage = () => {
  const card = [
    {
      title: `Construction`,
      icon: work,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Contracting`,
      icon: map,
      description: `Top Project can manage and hire subcontractors while acting as the main contact with construction clients.`,
    },
    {
      title: `Preconstruction`,
      icon: blueprint,
      description: `Preconstruction involves performing preliminary planning and engineering in order to define the project.`,
    },
    {
      title: `Environment`,
      icon: environment,
      description: `Green building has a highly reduced effect on environment, and is used in almost every project of our company.`,
    },
    {
      title: `Transport Infrastructure`,
      icon: truck,
      description: `Top Project can manage and hire subcontractors while acting as the main contact with construction clients.`,
    },
    {
      title: `Water Infrastructure`,
      icon: water,
      description: `Preconstruction involves performing preliminary planning and engineering in order to define the project.`,
    },
    {
      title: `Project and financial Management`,
      icon: molecule,
      description: `Green building has a highly reduced effect on environment, and is used in almost every project of our company.`,
    },
  ]
  return (
    <section id="services">
      <PageHeader title="Services & Activities" />
      <section className="services">
        <Container>
          <Row>
            {card.map(service => {
              return (
                <Col md="6" lg="4">
                  <Service services={service} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      <Activities 
      title="Our Activities"
      />
    </section>
  )
}

export default ServicesPage
