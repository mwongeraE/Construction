import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import work from "../images/icons/work.png"
import truck from "../images/icons/truck.png"
import water from "../images/icons/water.png"

const Services = () => {
  const card = [
    {
      title: `Construction`,
      icon: work,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Transport Infrastructure`,
      icon: truck,
      description: `We provide reliable infrastructure and services to our clients. This involves provision of machinery and other needs. `,
    },
    {
      title: `Water Infrastructure`,
      icon: water,
      description: `We provide a number of services: water supply, treatment, storage water resource management and hydropower`,
    },
  ]
  return (
    <div className="services" id="services">
      <Container>
      <h2 className="header-title text-center font-weight-bold text-uppercase">
            OUR SERVICES
          </h2>
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
    </div>
  )
}

export default Services
