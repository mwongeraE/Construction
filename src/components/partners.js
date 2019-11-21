import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./partners.scss"

import Service from "./partner"

import HandShake from "../images/icons/hand-shake.png"

const Services = () => {
  const card = [
    {
      title: `Yenigun`,
      icon: HandShake,
      description: `Construction project of the Douala stadium subject of the Contract No.0040/M/PR/MINMAP/2013`,
    },
    {
      title: `SA China CAMC Eng. Co. Ltd`,
      icon: HandShake,
      description: `Design, construction, supply, 
      assembly and commissioning 
      project for the foot plant and 
      the delom-Pangar evacuation 
      station duMarchéN 003 / LIB / EDC / DG / CEPPAHHLP / SPM 
      `,
    },
    {
      title: `Gregori INT`,
      icon: HandShake,
      description: `project of the break of Gas in 
      the framework of the 
      construction of the stage of 
      Douala Japoma 
      `,
    },
    {
      title: `CGCOC`,
      icon: HandShake,
      description: `National rehabilitation project N ° 04. Lot N ° 01, Ebebda-Kalom Road`,
    },
    {
      title: `SINOMACH`,
      icon: HandShake,
      description: `Project of drinking water supply in the city of Yaounde and its surroundings starting from the Sanaga river (PAEPYS)`,
    },
    {
      title: `XIANHUA`,
      icon: HandShake,
      description: `China news Agency`,
    },
    {
        title: `AFRIK ECHAFFAUDA GE`,
        icon: HandShake,
        description: `Scaffolding works in new units of SONARA`,
    },
    {
        title: `PTS CONSTRUCTION SA`,
        icon: HandShake,
        description: ``,
    },
    {
        title: `China State Constrction Eng. Corp`,
        icon: HandShake,
        description: ``,
    },
    {
        title: `WIETEC-CAM Sarl`,
        icon: HandShake,
        description: ``,
    },
    {
        title: `TBEA Eng. Contracting Co.`,
        icon: HandShake,
        description: ``,
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
