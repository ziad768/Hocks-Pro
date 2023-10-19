import React from 'react'
import { Link } from 'react-router-dom'

function ButtonCategory(props) {
  const {id,images , price , title} = props.product
  return (
    <div className="card" style={{minWidth: "18rem" , height:'18rem'}}>
  <img src={images[0]} className="card-img-top h-50" alt=""/>
  <div className="card-body">
    <h3 className="card-title">{title}</h3>
    <h5 className="card-text">price : {price}$</h5>
    <Link to={"/product/"+id}  className="btn btn-primary">details</Link>
  </div>
</div>
      )
}

export default ButtonCategory