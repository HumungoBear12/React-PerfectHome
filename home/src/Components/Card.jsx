import React from 'react'

const Card = ({image, title}) => {
  return (
    <div className="card">
        <img className="card-image" src={image} alt="" />
        <h4 className="card-title">{title}</h4>
    </div>
  )
}

export default Card