import React from 'react'

const PersonalForm = () => {
  return (
    <form className='container '>
    <div className='row '>
    <div className=" col-12 d-flex justify-content-around">
      <div className=" col-5">
        <label htmlFor="Frist">Frist Name</label>
        <input type="text" className="form-control" id="Frist" placeholder="First Name"/>
      </div>
      <div className=" col-5">
        <label htmlFor="last">Last Name</label>
        <input type="text" className="form-control" id="last" placeholder="Last Name"/>
      </div>
    </div>
    <div className=" col-12 d-flex justify-content-around">
      <div className=" col-5">
        <label htmlFor="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
      </div>
      <div className=" col-5">
        <label htmlFor="phone">Phone</label>
        <input type="number" className="form-control" id="phone" placeholder="phone Number"/>
      </div>
      </div>
      <div className=" col-12 d-flex justify-content-around">
      <div className=" col-11 ">
        <label htmlFor="inputPassword4">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Your Address"/>
      </div>
      </div>
 
   
    
    </div>
    <div className='d-flex justify-content-center p-3'><button type="submit" className="btn btn-primary m-auto">Sign in</button></div>
    
  </form>
  )
}

export default PersonalForm
