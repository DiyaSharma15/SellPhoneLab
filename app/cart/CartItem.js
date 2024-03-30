// CartItem.js
import React from "react";
import { MdClose } from "react-icons/md";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="row gy-3 mb-4">
      <div className="col-lg-5">
        <div className="me-lg-5">
          <div className="d-flex">
            <img
              src={item.image} // Use dynamic image source
              className="border rounded me-3"
              style={{ width: "96px", height: "96px" }}
            />
            <div className="">
              <a href="#" className="nav-link">
                {item.name} 
              </a>
              <p className="text-muted">{item.color}</p> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
        <div className="">
          {/* Quantity selector could be more dynamic but is left as is for simplicity */}
          <select style={{ width: "100px" }} className="form-select me-4">
            <option>1</option>
            {/* Additional options */}
          </select>
        </div>
        <div className="">
          <text className="h6">${item.price}</text> <br />
          <small className="text-muted text-nowrap"> ${item.pricePerItem} / per item </small>
        </div>
      </div>
      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
        <div className="float-md-end">
          <a
            href="#"
            className="btn btn-light border text-danger icon-hover-danger"
            onClick={() => onRemove(item.id)}
          >
            <MdClose /> Remove
          </a>
        </div>
      </div>
    </div>
  );
}
