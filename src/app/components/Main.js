import React from 'react'
import img1 from '../img/banner-01.jpg'
import img2 from '../img/banner-02.jpg'
import img3 from '../img/blog23-img.jpg'
import { useNavigate } from 'react-router-dom'
function Main() {
  const Navigate = useNavigate();
    return (
    <div id="carouselExampleControls" style={{ height:'82vh'}} className="carousel slide mb-3 position-relative" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} className="d-block w-100" style={{ height:'82vh'}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100" style={{ height:'82vh'}}  alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100" style={{ height:'82vh'}} alt="..."/>
      </div>
    </div>
    <div className='position-absolute w-100 overlay-main'>
    <div className='p-5 contentOverlay text-light'>
    <h1 >Welcome To My Store </h1>
    <h5 className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vel aperiam porro aliquid? Quia beatae id pariatur, nobis dolores, aliquam veritatis magnam voluptatum ab vitae cumque dicta! Delectus, cupiditate nostrum?</h5>
    <button className='btn btn-outline-light' onClick={() =>Navigate('/Product')}>Go To Products</button>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
  </div>
  )
}

export default Main