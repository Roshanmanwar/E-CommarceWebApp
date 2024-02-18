import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ProductInfo } from "../redux/product.slice";
import { useNavigate } from "react-router";

const SearchProduct = () => {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    //collect redux data
    let { SearchData } = useSelector((state) => {
        return state.products1;
    });


    return (<>

        <div className="container" style={{ "marginTop": "60px" }}>
            <div className="py-3">
            </div>

            <div className="row mb-3">

                {
                    SearchData.map((product, index) => {

                        return (<>
                            <div className="col-md-3 d-flex gap-2 mb-3"
                                key={product.id}
                                title={product.title + '-' + product.description}>
                                <div className="card size  ">
                                    <img id="productImg" src={product.image}
                                        className="card-img-top-img m-auto pt-2" alt="..." height={"200px"} width={"220px"}
                                        onClick={() => dispatch(ProductInfo({ ...product, qty: 1 }),
                                            navigate('/productDetails'))

                                        }
                                    />
                                    <div className="card-body text-center">

                                        <div className="overflow">
                                            <p className="text-capitalize"> Category : {product.category}</p>
                                            <hr color="black"></hr>
                                        </div>

                                        <div className="">
                                            <span className="pe-2">Price : ₹{product.price}</span>
                                            <span className="text-secondary pe-2"><del>₹{product.price * 2}</del></span>
                                            <span className="text-success">50% off</span>
                                        </div>

                                        <div>
                                            <button
                                                className="btn btn-primary mt-3 pt-1 btn-sm" id="btn"
                                                onClick={() => dispatch(AddToCart({ ...product, qty: 1 }))}
                                            // qty :1 to add in redux 
                                            >AddToCart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>)
                    })
                }


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


    </>)
};

//export
export default SearchProduct;