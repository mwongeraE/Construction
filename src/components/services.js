import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import work from "../images/icons/work.png"
import dig from "../images/icons/dig.png"
import powerplant from "../images/icons/power-plant.png"
import truck from "../images/icons/truck.png"
import water from "../images/icons/water.png"
import power from "../images/icons/power.png"

const Services = () => {
  const card = [
    {
      title: `Construction`,
      icon: work,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Mining and Functional facilities`,
      icon: dig,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Oil and Gas`,
      icon: powerplant,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
      title: `Transport Infrastructure`,
      icon: truck,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Water Infrastructure`,
      icon: water,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Renewable and Nuclear energy`,
      icon: power,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
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
