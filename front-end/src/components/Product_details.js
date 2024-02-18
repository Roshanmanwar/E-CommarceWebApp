import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, clearProducts } from "../redux/product.slice";
import { useNavigate } from "react-router";

const Product_details = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let { products } = useSelector((state) => {
        return state.products1;
    })


    useEffect(() => {
        // navigate('/allproduct')
        //when leave(unmounting) the component then return() will excute...
        return () => {
            dispatch(clearProducts(products))
        }
    }, [products]);

    return (<>
        <section style={{ "margin-top": "60px" }}>
            <div className="container-fluid px-5 bg-light">
                {
                    products.map((product, index) => {
                        return (<>
                            <div className="row bg-white">
                                <div className="col-sm-5">
                                    <div className="thumbnail pstop60px">
                                        <div className="prodimageDiv mt-2 mb-4">
                                            <img src={product.image} className="img-responsive rounded" width="250px" height="300px" alt="Image"  />
                                        </div>

                                        <div className="caption pb-5">
                                            <div className="row buttons justify-content-center ">

                                                <button className="btn  col-sm-4 col-sm-offset-2 btn-lg me-4 brnone"
                                                    onClick={() => dispatch(AddToCart({ ...product }))}
                                                    style={{ "background-color": "#ff9f00", color: "#fff", fontSize: "1em" }}>
                                                    <span className="glyphicon glyphicon-shopping-cart">
                                                    </span>&nbsp;ADD TO CART</button>

                                                <button className="btn col-sm-4 col-sm-offset-1 btn-lg brnone" style={{ "background-color": "#fb641b", color: "#fff", fontSize: "1em" }}><i className="fa fa-bolt" style={{ "font-size": "1.2em" }}></i> BUY NOW</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-sm-7 desc">

                                    <div className="mt-3">

                                        <p className=" text-capitalize  "> Category : {product.category}</p>


                                        <h4 className="productname"><strong>{product.title}</strong></h4>

                                        <div className="row">
                                            <div className="col-sm-12 ft13">
                                                <span className="label label-success">{product.rating.rate} <i className="bi bi-star-fill"></i>
                                                </span>  <strong>{product.rating.count} Ratings & Reviews</strong>
                                            </div>
                                        </div>

                                        <div className="pt-3 pb-2">
                                            <h3>₹{product.price}</h3>
                                        </div>

                                        <div>
                                            <h6>Available offers</h6>
                                            <div className="mt-2">

                                                <h6 className="ft14"> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="16px" className="mr-2" alt="" /> EMIs from <strong>Rs {Math.round((product.price) / 3)}/month (3 Month) </strong><a href="#"> <i className="fa fa-chevron-right"></i></a></h6>

                                                <h6 className="ft14"> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="16px" className="mr-2" alt="" /> <span className="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="#"></a></h6>

                                                <h6 className="ft14"> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="16px" className="mr-2" alt="" /> <span className="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="#"></a></h6>
                                            </div>

                                        </div>

                                        <div className="mt-4 d-flex gap-5 flexwrapxs">

                                            <div className="d-flex align-items-center gap-4">
                                            </div>

                                            <div className="d-flex align-items-center gap-4">

                                            </div>

                                        </div>

                                    </div>

                                    <div className="mt-3 mb-3">
                                        <div className="mt-4 d-flex gap-5 ">

                                            <div className="d-flex align-items-center gap-4 w-50 flexwrapxs">
                                                <div className="ft14">Delivery</div>
                                                <div className="">
                                                    <input type="text" className="form-control" placeholder="Enter Pincode" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mt-3">
                                            <h5 className="ft12">Delivery in 3-4 days | <a href="#" style={{ "color": "green text-decoration:none" }}></a></h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 d-flex gap-5 pb-5 flexwrapxs">

                                        <div className="d-flex  gap-4">
                                            <div className="ft14">More Details</div>
                                            <div className="ft14">
                                                <div className="">
                                                    <p> {product.description}</p>

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </>);
                    })
                }


            </div>
        </section>



        <section>
            <footer className="footer-section">
                <div className="container">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2023, All Right Reserved <a href="#">flipkart</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                        <button type="button" className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}


export default Product_details;