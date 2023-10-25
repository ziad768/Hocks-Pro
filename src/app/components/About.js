import React from 'react'
import CardAbout from './CardAbout'
function About() {
  const team = [{name: "Ziad Hamdi" , job: "Front-end"},{name: "Bahaa Saber" , job: "Front-end"},{name: "Ahmed Hossam" , job: "Full-steak"},{name: "Ahmed Adel" , job: "Front-end & Technical"}]
  return (
    <div className="bg-light py-5" style={{minHeight: '82vh'}}>
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our team</h2>
          <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="row text-center">
            {team.map((ele)=> <CardAbout  name={ele.name} kay={ele} job={ele.job} ></CardAbout>)}
      </div>
    </div>
  </div>
  
  
  )
}

export default About
