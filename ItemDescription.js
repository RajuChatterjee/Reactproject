import React from 'react'

function ItemDescription({name, description,price}) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      
      
      </div>
  )
}

export default ItemDescription