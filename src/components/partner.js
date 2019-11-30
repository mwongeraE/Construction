import React from "react"
import "./partner.scss"

const Partner = ({ services }) => {
  const { title, icon, description } = services
  return (
    <div className="partner-card">
      <section className="service-icon">
        <img src={icon} alt={title} />
      </section>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Partner