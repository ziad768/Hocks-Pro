import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Loading from './Loading'
function Product() {

  const [product, setProducts] = useState([])
  const [categories, setCategory] = useState([])
  const [categoryProduct, setCategoryProduct] = useState(null)
  const checkCategory = (ele)=> ele === categoryProduct ? "btn btn-dark btnCategory" :'btn btn-outline-dark btnCategory'

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => {
        data.length = 5;
        setCategory(data)
      });
  }, [])
  useEffect(() => {
    fetch(`https://dummyjson.com/products${categoryProduct == null ? "" : "/category/" + categoryProduct}`)
      .then(res => res.json())
      .then((data) => setProducts(data.products));
    }, [categoryProduct]);
    
    return (
      
      <div className='bg-light'>
    {product.length === 0 ? <Loading/> : "" }
    <div className='d-flex flex-wrap gap-4 justify-content-center pt-2' >
        <button className={checkCategory(null)} onClick={(e) => { setCategoryProduct(null); }}>AllProduct</button>
        {categories.map((ele) => <button key={ele} className={checkCategory(ele)} onClick={(e) => { setCategoryProduct(ele);}} >{ele}</button>)}
      </div>
      <h1 className='text-center category py-2 ' >{categoryProduct !== null ? categoryProduct : "AllProduct"}</h1>
      <div className='line mb-3'></div>
      <div className='d-flex flex-wrap gap-3 justify-content-evenly' style={{minHeight:'71vh'}}>
      {      product.map((ele)=> <CardProduct  product={ele} kay={ele.id} />)}    
      </div>
      </div>
  )
}

export default Product
