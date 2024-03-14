import React from "react";
import { MdShoppingBag, MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
export default function ProductDetails() {
  return (
    <section className="py-5 productDetails">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <div
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src="https://sellphonelab.ca/wp-content/uploads/2022/10/arm-band.jpg"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <button
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
              >
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
                />
              </button>
              <button
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
              >
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
                />
              </button>
              <button
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
              >
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
                />
              </button>
              <button
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
              >
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
                />
              </button>
              <button
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
              >
                <img
                  width="60"
                  height="60"
                  className="rounded-2"
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                />
              </button>
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">Camera Lens Protector</h4>
              <div className="d-flex flex-row my-3">
                <span className="text-muted">
                  <MdShoppingBasket /> 154 orders
                </span>
                <span className="text-success ms-2">In stock</span>
              </div>

              <div className="mb-3">
                <span className="h5">$75.00</span>
                <span className="text-muted">/per box</span>
              </div>

              <p>
                The best camera lens protectors for the iPhone 13 Pro & iPhone
                13 Pro Max in 2024
              </p>

              <div className="row">
                <dt className="col-3">Type:</dt>
                <dd className="col-9">Regular</dd>

                <dt className="col-3">Color</dt>
                <dd className="col-9">white</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">info about the Material</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">Apple</dd>
              </div>

              <hr />

              <div className="row mb-4">
                <div className="col-md-4 col-6 mb-3">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3" style={{ width: "170px" }}>
                    <select
                      style={{ width: "100px" }}
                      className="form-select me-4"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>

              <Link href="/cart" className="btn btn-primary shadow-0">
                {" "}
                <MdShoppingBag /> Add to cart{" "}
              </Link>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
