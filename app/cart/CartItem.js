import React from 'react'
import { MdClose } from 'react-icons/md';
export default function CartItem() {
  return (
    <div className="row gy-3 mb-4">
    <div className="col-lg-5">
        <div className="me-lg-5">
            <div className="d-flex">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" className="border rounded me-3" style={{ width: "96px", height: "96px" }} />
                <div className="">
                    <a href="#" className="nav-link">Winter jacket for men and lady</a>
                    <p className="text-muted">Yellow, Jeans</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
        <div className="">
            <select style={{ width: "100px" }} className="form-select me-4">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div className="">
            <text className="h6">$1156.00</text> <br />
            <small className="text-muted text-nowrap"> $460.00 / per item </small>
        </div>
    </div>
    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
        <div className="float-md-end">
            <a href="#" className="btn btn-light border text-danger icon-hover-danger"><MdClose/> Remove</a>
        </div>
    </div>
</div>
  )
}
