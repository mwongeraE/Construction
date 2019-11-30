import React from "react"
import { Container, Row, Col,} from "reactstrap"
import List2 from "../components/list2"

import Square from "../assets/svg/solid/square.svg"
import activityThumbnail from "../images/activity.jpg"

import "./about.scss"

const activity = `ORTHO SERVICE is a research firm specializing in the field of assistance to businesses in major road works, construction of buildings, bridges, construction of hydroelectric dams and many other areas.`
const sample_activity = `Some of our activities include:`

const Activities = () => {
  return (
    <div className="about section-lg">
      <Container>
        <Row>
          <Col md="6">
            <section className="about-content mx-5">
              <h2 className="header-title font-weight-bold text-uppercase">
                OUR ACTIVITIES
              </h2>
              <p className="about-description font-size-90 text-secondary my-2">
                {activity}
                {sample_activity}
              </p>
              <ul className="list-unstyled mt-3">
                <li>
                  <List2
                    svg={<Square />}q
                    value="CAD Mounting"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="road and highway construction"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Construction and rehabilitation of buildings"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Construction and rehabilitation of Hydro electric dam "
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Office equipment and hardware supply"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Personnel management for small, medium and large projects"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="The promotion of training in several sectors"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value=" Organization of B2B Meetings"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Organization of business trips"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    value="Research partnerships"
                    alignItems="center"
                    className="font-weight-bold my-2"
                  />
                </li>
              </ul>
            </section>
          </Col>
          <Col md="6">
            <section className="about-thumbnail">
              <img
                src={activityThumbnail}
                alt="Company Thumbnail"
                className="img-thumbnail"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Activities