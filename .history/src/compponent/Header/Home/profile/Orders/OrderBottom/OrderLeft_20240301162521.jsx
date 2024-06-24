import React from 'react'
import img from "../../mastercart.png";
import Style from "../../../Home.module.css";
const OrderLeft = () => {
  return (
    <div className={`${Style.SideBar} bg-body border rounded`} style={{ overflowY: "scroll" }}>
    {" "}
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Last Price</th>
          <th scope="col">Total</th>
          <th scope="col">View Product</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
        <tr>
        <td className="d-flex align-items-center">
          <img src={img} style={{ width: "30px", height: "30px" }} />
          <span>LapTop Computer</span>
        </td>
          <th scope="row">2</th>
          <td>1520$</td>
          <td>14560$</td>
          <td>
            <button className="btn btn-sm btn-warning">View</button>
          </td>
        </tr>
   
      
       
      
       
      </tbody>
    </table>
  </div>
  )
}

export default OrderLeft
