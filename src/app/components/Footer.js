import React from 'react'

function Footer() {
  return (
    <footer className="bg-light pb-2">
    <div className="container text-center">
      <p className="font-italic text-muted mb-0">&copy; Copyrights Ziad Hamdi Saad All rights reserved.</p>
      <ul className="social mb-0 list-inline mt-3">
      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-twitter"></i></a></li>
      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-instagram"></i></a></li>
      <li className="list-inline-item"><a href="/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
    </ul>
    </div>
  </footer>  )
}

export default Footer