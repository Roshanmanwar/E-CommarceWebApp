import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import { useEffect, useState } from "react";
import { getotherData } from "../service/product.service";
import { searchdata } from "../redux/product.slice";

const Header = () => {

    //dispatch --- run teh actions
    let dispatch = useDispatch();

    let [SerchVal, SetSearchVal] = useState();

    //used to navigation
    let navigate = useNavigate()

    //useSelection to get data from redux
    let { userdata } = useSelector((state) => {
        return state.products1;
    });

    //get data from redux...
    // get a cart data
    let { cart } = useSelector((state) => {
        return state.products1;
    });

    useEffect(() => {
        document.getElementById('navbarDropdown').innerText = "Account"
    }, [])

    //get search bar value
    let SearchBarVal = (e) => {
        SetSearchVal(e.target.value);
    };


    let otherData = async () => {
        let url = `http://localhost:3002/allproduct?category=${SerchVal}`;
        let data = await getotherData(url); // getotherData()---this call from service file
        //save data in serach data slice
        dispatch(searchdata(data))

    }

    //input bar button
    let SearchBtn = () => {
        otherData();
        navigate('/serachProduct')

    }

    let EnterPress = (event) => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == 13) {

            otherData();
            navigate('/serachProduct')
        }
    }

    return (<>
        <div className="container-fluid bg_blue fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="imgHead" onClick={() => navigate('/')}><img id="imgHome" className="mx-3 ms-1" src="/img/home.png" height={"40px"} ></img></a>
                    <a className="navbar-brand" href="#"><img src="./img/flipkartlogo.png" width="75px" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white" style={{ "color": "#fff" }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex col-md-6">
                            <input className="form-control me-2"
                                type="text" placeholder="Search for product brands and more"
                                onChange={SearchBarVal} id="searchBar" onKeyDown={EnterPress} />
                            <button className="btn btn-primary"
                                onClick={() => SearchBtn()}><i className="bi bi-search"></i>
                            </button>
                        </div>
                        
                        <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-5 mx-4">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-capitalize " href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {userdata.userName}
                                </a>
                                <ul className="dropdown-menu mt-3" aria-labelledby="navbarDropdown">
                                    <li className="m-auto ms-3 ">
                                        <img src="/img/user-profile.png" height={"30px"}></img>
                                        <h7 className="mx-2">Exiting user ?</h7>
                                        <LoginPage /></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                        <li className="m-auto ms-3" >
                                            <img src="/img/add-friend.png" height={"25px"}></img>
                                            <h7 className="mx-1">New Customer?</h7><RegistrationPage />
                                        </li>

                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Become a Seller</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Notification Preprensences</a></li>
                                    <li><a className="dropdown-item" href="#">27/7 Customer Care </a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Download App</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/*                                 
                                <a className="nav-link" href="/cart"> <i className="bi bi-cart-fill"></i>
                                    Cart</a> */}
                                <a className="cart nav-link" onClick={() => {
                                    navigate('/cart')
                                }}>
                                    {/* check here length of a product in cart */}
                                    <span className="count">{cart.length}</span>
                                    <i className="bi bi-cart-fill"></i>
                                </a>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        </div>



    </>);
};

export default Header;