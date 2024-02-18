import { useNavigate, useSearchParams } from "react-router-dom";
import { get } from "../service/product.service";
import { useDispatch, useSelector } from "react-redux";
import { ProductInfo, saveCart, saveProduct } from "../redux/product.slice";
import { useEffect } from "react";

const AllProduct = () => {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    //to get data from dynamic url ... useSearchParams(); is used
    // it return a array...
    let [urldata] = useSearchParams();
    //to access this url data... get()--method is used...
    // console.log(urldata.get("category_id"));
    // console.log(urldata.get("category_name"));

    const getCategoryProductList = async () => {
        let producturl = urldata.get("category_id") //this get() call from service file.
        let url = `http://localhost:3002/products?ctgry_id=${producturl}`;
        let data = await get(url);
        dispatch(saveProduct(data));

    };

    useEffect(() => {
        //when componet mounting
        getCategoryProductList();
        return () => {
            //unmounting list
            //remove list when leave the page
            dispatch(saveProduct([]));

        }
    }, [])



    //to get redux data--- useSelector Method is used....
    // it has state arugument and this arg gives our slice data...

    let { productList } = useSelector((state) => {
        return state.products1;
    });
    // console.log(productList);


    return (<>

        <div className="container" style={{ "marginTop": "60p" }}>
            <div className="py-3">
                <h4 className="text-capitalize">All Products of : {urldata.get("category_name")} </h4>
            </div>

            <div className="row mb-3">
                {/* to render this div  */}

                {
                    productList.map((product, index) => {

                        return (<>
                            <div className="col-md-3 d-flex gap-2 mb-2"
                                key={product.id}
                                title={product.title + '-' + product.description}>
                                <div className="card size ">
                                    <img id="productImg" src={product.image}
                                        className="card-img-top-img m-auto pt-2 rounded" alt="..." height={"200px"} width={"220px"}
                                        onClick={() => dispatch(ProductInfo({ ...product, qty: 1 }),
                                            navigate('/productDetails'))

                                        }
                                    // onDoubleClick={navigate('/productDetails')}

                                    />
                                    <div className="card-body text-center">

                                        <div className="overflow">
                                            <p className="text-capitalize"> Category : {product.category}</p>
                                            <hr color="black"></hr>
                                            <p className="product-name">{product.title.substring(0, 30)} </p>
                                        </div>

                                        <div className="">
                                            <span className="pe-2">Price : ₹{product.price}</span>
                                            <span className="text-secondary pe-2"><del>₹{product.price * 2}</del></span>
                                            <span className="text-success">50% off</span>
                                        </div>

                                        <div>
                                            <button
                                                className="btn btn-primary m-auto pt-1 btn-sm mt-3" id="btn"
                                                onClick={() => dispatch(saveCart({ ...product, qty: 1 })
                                                )
                                                }
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


    </>);
};

export default AllProduct;