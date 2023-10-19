import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { successToast } from './Toastify';

function CardDetails() {
  const [product, setProduct] = useState({})
  const [thumbnail, setThumbnail] = useState(product.thumbnail)
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((data) =>{ setProduct(data);setThumbnail(data.thumbnail)});
  }, []);

  return (
    <div>
      {product.title === undefined ? <Loading /> :
        <div className="container">
          <h1 className="my-4">{product.title}
            <span className='fs-3 text-danger'> {product.brand}</span>
          </h1>

          <div className="row">

            <div className="col-md-8">
              <img className="img-fluid" style={{height: 485}} src={thumbnail} alt="" />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">{product.title + " " + product.category}</h3>
              <p>{product.description}</p>
        <h2>{product.price} $</h2>
              <div className='d-flex gap-3 align-items-center'>
                <input type='number' placeholder='1' min={1} max={50} className='form-control w-25' />
                <button className='btn btn-success' onClick={()=> successToast('Added to Cart')}>Add To Cart</button></div>
            </div>
          </div>

          <h3 className="my-4">Related Projects</h3>

          <div className="row">
          {product.images.map((ele)=> (
            <div key={ele} className="col-md-4 col-sm-7 mb-5 " >
            <button className='btn border-0' onClick={() => setThumbnail(ele)}>
              <img className="img-fluid" src={ele} style={{height:250}} alt="" />
            </button>
            </div>
          ))}
          </div>

        </div>}
    </div>
  )
}

export default CardDetails