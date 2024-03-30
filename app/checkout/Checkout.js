"use client";
import React, { useContext,useState,useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import CartContext from "../context/CartContext";
import axios from 'axios';
export default function Checkout() {
    const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
    const increaseQty = (cartItem) => {
        const newQty = cartItem?.quantity + 1;
        const item = { ...cartItem, quantity: newQty };
    
        if (newQty > Number(cartItem.stock)) return;
    
        addItemToCart(item);
      };
      const decreaseQty = (cartItem) => {
        const newQty = cartItem?.quantity - 1;
        const item = { ...cartItem, quantity: newQty };
    
        if (newQty <= 0) return;
    
        addItemToCart(item);
      };
      const amountWithoutTax = cart?.cartItems?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    
      const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
    
      const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
      const publishableKey = process.env.NEXT_PUBLIC_API_KEY;
      const stripePromise = loadStripe(publishableKey);
      const [items, setItems] = useState([]);
      useEffect(() => {
        if (cart && cart.cartItems) {
          setItems([...items, ...cart.cartItems]);
        }
      }, [cart]);
      const createCheckoutSession = async () => {
        try {
            const response = await axios.post('/api/home', { items });
            //console.log('resposne checkour'+response);
            // Assuming you want to redirect to the session URL after successful response
             window.location = response.data.sessionURL;
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 mb-4">
                        <div className="card mb-4 border shadow-0">
                            <div className="p-4 d-flex justify-content-between">
                                <div className="">
                                    <h5>Have an account?</h5>
                                    <p className="mb-0 text-wrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                                    <a href="#" className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100">Register</a>
                                    <a href="#" className="btn btn-primary shadow-0 text-nowrap w-100">Sign in</a>
                                </div>
                            </div>
                        </div>


                        <div className="card shadow-0 border">
                            <div className="p-4">
                                <h5 className="card-title mb-3">Guest checkout</h5>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <p className="mb-0">First name</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" placeholder="Type here" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <p className="mb-0">Last name</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" placeholder="Type here" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <p className="mb-0">Phone</p>
                                        <div className="form-outline">
                                            <input type="tel" id="typePhone" defaultValue="+1 " className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <p className="mb-0">Email</p>
                                        <div className="form-outline">
                                            <input type="email" id="typeEmail" placeholder="example@gmail.com" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">Keep me up to date on news</label>
                                </div>

                                <hr className="my-4" />

                                <h5 className="card-title mb-3">Shipping info</h5>

                                <div className="row mb-3">
                                    <div className="col-lg-4 mb-3">

                                        <div className="form-check h-100 border rounded-3">
                                            <div className="p-3">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    Express delivery <br />
                                                    <small className="text-muted">3-4 days via Fedex </small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="col-lg-4 mb-3">

                                        <div className="form-check h-100 border rounded-3">
                                            <div className="p-3">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label className="form-check-label" for="flexRadioDefault3">
                                                    Self pick-up <br />
                                                    <small className="text-muted">Come to our shop </small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-8 mb-3">
                                        <p className="mb-0">Address</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" placeholder="Type here" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-4 mb-3">
                                        <p className="mb-0">City</p>
                                        <select className="form-select">
                                            <option value="1">Calgary</option>
                                            <option value="3">Olds</option>
                                            <option value="4">Cochrane</option>
                                        </select>
                                    </div>

                                    <div className="col-sm-4 mb-3">
                                        <p className="mb-0">House</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" placeholder="Type here" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-6 mb-3">
                                        <p className="mb-0">Postal code</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-6 mb-3">
                                        <p className="mb-0">Zip</p>
                                        <div className="form-outline">
                                            <input type="text" id="typeText" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                    <label className="form-check-label" for="flexCheckDefault1">Save this address</label>
                                </div>

                                <div className="mb-3">
                                    <p className="mb-0">Message to seller</p>
                                    <div className="form-outline">
                                        <textarea className="form-control" id="textAreaExample1" rows="2"></textarea>
                                    </div>
                                </div>

                                <div className="float-end">
                                    <button className="btn btn-light border">Cancel</button>
                                    <button  onClick={createCheckoutSession} className="ml-2 btn btn-success shadow-0 border" >Continue</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                        <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: "320px" }}>
                            <h6 className="mb-3">Summary</h6>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Total price:</p>
                                <p className="mb-2">${amountWithoutTax}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Tax:</p>
                                <p className="mb-2 text-danger">${taxAmount}</p>
                            </div>
                            
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Total price:</p>
                                <p className="mb-2 fw-bold">${totalAmount}</p>
                            </div>

                            <div className="input-group mt-3 mb-4">
                                <input type="text" className="form-control border" name="" placeholder="Promo code" />
                                <button className="btn btn-light text-primary border">Apply</button>
                            </div>

                            <hr />
                            <h6 className="text-dark my-4">Items in cart</h6>

                            {cart?.cartItems?.length > 0 && (
                                <div>
                                {cart?.cartItems?.map((cartItem) => (
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3 position-relative">
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                                        1
                                    </span>
                                    <img src={cartItem.image} alt={cartItem.name} style={{ height: "96px", width: "96x" }} className="img-sm rounded border" />
                                </div>
                                <div className="">
                                    <a href="#" className="nav-link">
                                        {cartItem.name}
                                    </a>
                                    <div className="price text-muted">Total: ${cartItem.price * cartItem.quantity.toFixed(2)}</div>
                                </div>
                            </div>
                            
                            ))}
                            </div>
                        )}
                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
