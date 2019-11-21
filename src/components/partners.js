import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./partners.scss"

import Service from "./partner"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"

const Services = () => {
  const card = [
    {
      title: `Yenigun`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `SA China CAMC Eng. Co. Ltd`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Gregori int`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
      title: `LGCOC`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `SINOMACH`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `XIANHUA`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
        title: `AFRIL ECAAFFAUDA GE`,
        icon: Ruler,
        description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
        title: `PTS CONSTRUCTION SA`,
        icon: Ruler,
        description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
        title: `China State Constrction Eng. Corp`,
        icon: Ruler,
        description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
        title: `WIETEC Cam Sarl`,
        icon: Ruler,
        description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
        title: `TBEA Eng Contracting Co.`,
        icon: Ruler,
        description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
  ]
  return (
    <div className="services" id="services">
      <Container>
      <h2 className="header-title text-center font-weight-bold text-uppercase">
            OUR PARTNERS
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
