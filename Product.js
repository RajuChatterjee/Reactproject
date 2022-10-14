import React from 'react'
import ItemDescription from "./ItemDescription"

function Product({name, description,price}){


  return (
    <div>
      <ItemDescription price ={price}/>
 <h3>{name}</h3>
 <h4>{description}</h4>
 
      </div>
  )
}
export default Product