import { useDispatch, useSelector } from "react-redux";
import { removeProduct, addQty, removeQty } from "../redux/product.slice";
import { useEffect, useState } from "react";

const Cart = () => {

    let dispatch = useDispatch();

    //get all data from cart...
    let { cart } = useSelector((state) => {
        return state.products1;
    });

    let [totalPrice, setTotalPrice] = useState({ qtyCount: 0, qtyPrice: 0 });

    //it will run after update cart data..
    useEffect(() => {
        let price = cart.reduce((preValue, currentValue) => {
            let pTotal = Math.round(currentValue.qty * currentValue.price);
            return {
                qtyCount: preValue.qtyCount + currentValue.qty,
                qtyPrice: preValue.qtyPrice + pTotal,
            };
        },
            { qtyCount: 0, qtyPrice: 0 }
        );
        // set this entire function in this state...
        setTotalPrice(price);
    });

    return (<>

        <div className="container" style={{ "marginTop": "60px" }}>

            <div className="py-3">
                <h5>Your Cart</h5>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="cart-body">
                        {
                            cart.map((cart, index) => {
                                return (<>
                                    <div className="d-flex border p-4 gap-2 mt-2">

                                        <div className="px-4">
                                            <img src={cart.image} height={"200px"} width={"250px"}
                                                className="cartpImg" alt="" />
                                        </div>
                                        <div className="">
                                            <p className="text-capitalize">Category : {cart.category}</p>
                                            <p className="card-title"> {cart.title}</p>
                                            <p className="card-text mt-3"> Price : ₹{cart.price}</p>
                                            <div className="d-flex gap-2 m-auto">

                                                <div className="d-flex gap-1  ">


                                                    Quentity:  <button className="btn btn-sm btn-secondary"
                                                        onClick={() => dispatch(removeQty({ ...cart }))}>
                                                        -</button>
                                                    <span className="btn btn-sm">{cart.qty} </span>

                                                    <button className="btn btn-sm btn-primary"
                                                        onClick={() => dispatch(addQty({ ...cart }))}>+
                                                    </button>


                                                </div>
                                            </div>

                                            {/* <a href="#" className="btn ">Save for Later</a> */}
                                            <a href="#" className="btn btn-danger btn-sm mt-3 "
                                                onClick={() => dispatch(removeProduct(cart))}>Remove</a>
                                        </div>

                                    </div>

                                </>);
                            })

                        }


                    </div>

                    <div className="d-none">

                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-2">
                                    <div>
                                        1. Login or SigUp
                                    </div>
                                    <div className="w-50">
                                        <input type="text" className="form-control mt-3 mb-3" placeholder="Enter Email/Mobile Number" />
                                        <a href="#" className="btn btn-danger btn btn-danger px-5 py-2 brnone" style={{ "backgroundColor": "#fb641b " }}>CONTINUE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-2">
                                    <div>
                                        2. DELIVERY ADDRESS
                                    </div>
                                    <div className="bg-light py-2 px-3 mt-3" >Add new Address</div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-2">
                                    <div>
                                        3. ORDER SUMMARY
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="mb-2">
                                    <div>
                                        3. PAYMENT OPTION
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body d-flex  justify-content-end">
                                <a href="#" className="btn btn-danger btn btn-danger px-5 py-2 brnone" style={{ "backgroundolor": "#fb641b; " }}>PLACE ORDER</a>
                            </div>
                        </div>
                    </div>





                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title border-bottom pb-3">PRICE DETAILS </h6>
                            <table className="table">
                                <tbody>
                                    <tr className="border-white">
                                        <td>Price ({totalPrice.qtyCount}) </td>
                                        <td>₹{totalPrice.qtyPrice}  </td>
                                    </tr>
                                    <tr className="border-white">
                                        <td>Discount </td>
                                        <td> <span className="text-success">- ₹0</span>  </td>
                                    </tr>

                                    <tr className="">
                                        <td>Delivery Charges   </td>
                                        <td> <span className="text-success">FREE</span>  </td>
                                    </tr>
                                    <tr className="border-white ">
                                        <td> <span className="font-weight-bold">Total Amount </span>  </td>
                                        <td><span className="font-weight-bold">₹{totalPrice.qtyPrice}</span>  </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login
                        </h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <p className="p-3 p-3 pb-0">Get access to your Orders, Wishlist and Recommendations</p>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter Email/Mobile no" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter Password" />
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer  justify-content-center">


                    </div>
                </div>
            </div>
        </div>

    </>);
};

export default Cart;