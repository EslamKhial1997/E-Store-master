import { Chip } from '@mui/material'
import React from 'react'

const Cloud = () => {
  return (
    <div className=" d-flex flex-wrap bg-light rounded mt-3">
        <h6
          className="m-3 col-12 fw-bolder"
          style={{ color: "#072541", cursor: "pointer" }}
        >
          Tag Cloud
        </h6>
        <div className="d-flex flex-wrap justify-content-around">
          <Chip label="Accesories" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }}/>
          <Chip label="Electronic" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Fastion" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Cloth" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Watchs" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="LapTop" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
        </div>
      </div>
  )
}

export default Cloud
