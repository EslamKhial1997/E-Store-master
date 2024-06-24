import React from 'react'

const Offers = () => {
  return (
    <div className="bg-warning d-flex col-12 justify-content-around align-items-center fw-bold  my-5 p-3  rounded">
    <strong className="col-8  fs-5" style={{ color: "#072541" }}>
      Big offers on new collection
    </strong>
    <span
      className="col-3 text-center rounded p-2 text-light"
      style={{ backgroundColor: "#072541", cursor: "pointer" }}
    >
      Know More
    </span>
  </div>
  )
}

export default Offers
