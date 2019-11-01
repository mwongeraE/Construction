import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.scss"

import Calendar from "../assets/svg/calendar.svg"
import Clock from "../assets/svg/clock.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

const Footer = ({ siteMetadata }) => {
  const {
    title,
    social,
    opening,
    author,
  } = siteMetadata
  return (
    <footer>
      <section className="footer-wrapper">
        <Container className="footer-content">
          <Row className="section-md">
            <Col className="footer-aboutus">
              <section className="footer-social">
                <Row className="mb-2">
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookSVG className="fill-svg" />
                  </a>
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterSVG className="fill-svg" />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramSVG className="stroke-svg" />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinSVG className="stroke-svg" />
                  </a>
                </Row>
              </section>
              <section className="opening">
              <Row className="align-items-center">
              <h6 className="font-weight-bold text-uppercase align-items-center">Opening Hours</h6>
              </Row>
                <hr />
                <Row className="align-items-center">
                  <Calendar /> {opening.day}
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Clock /> {opening.hour}
                </Row>
                <hr />
              </section>
            </Col>
          </Row>
        </Container>
        <Row className="footer-credits justify-content-center">
          {` ${title} © 2019 || Code and design by: `} &nbsp;
          <a
            href={author.website}
            target="_blank"
            rel="noopener noreferrer"
            title={author.position}
          >
            {author.name}
          </a>
        </Row>
      </section>
    </footer>
  )
}

export default Footer
