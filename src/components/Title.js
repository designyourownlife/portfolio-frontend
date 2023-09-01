import React from "react"

const Title = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      {title && (
        <div className="section-title">
          <h2>{title}</h2>
          <div className="underline"></div>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      )}
    </React.Fragment>
  )
}

export default Title
