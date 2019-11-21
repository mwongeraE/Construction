import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"

const Services = () => {
  const card = [
    {
      title: `Construction`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Mining and Functional facilities`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Oil and Gas`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
      title: `Transport Infrastructure`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Water Infrastructure`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Renewable and Nuclear energy`,
      icon: Ruler,
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
