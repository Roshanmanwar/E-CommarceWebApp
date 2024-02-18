import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import RegistrationPage from "./RegistrationPage";
import axios from "axios";
import { useNavigate } from "react-router";
import { userdata } from "../redux/product.slice";
import { useDispatch } from "react-redux";


const LoginPage = () => {

    //run the action
    let dispatch = useDispatch();

    //navigate
    let navigate = useNavigate();

    const [isShow, invokeModal] = useState(false);

    let [inputpass, setInputPass] = useState();
    let [inputMobile, setInputMobile] = useState();
    let [inputEmail, setInputEmail] = useState();

    //modal open or close
    const initLoginModal = () => {
        return invokeModal(!isShow);
    }

    // get value from pass input text
    const getPassText = (e) => {
        setInputPass(e.target.value);
    }

    // get value from mobile from input text
    const getMobileText = (e) => {
        setInputMobile(e.target.value);
    }

    // get value from email from input text
    const getEmailText = (e) => {
        setInputEmail(e.target.value);
    }

    //login button
    const login = () => {
        axios.post('http://localhost:3050/login', { inputEmail, inputpass }).then((res) => {

            if (res.data.status === true) {
                document.getElementById('email').value = "";
                document.getElementById('pass').value = "";
                alert("log in successfully")
                initLoginModal();
                dispatch(userdata({ ...res.data.result }))
                navigate('/')

            } else {
                alert('Please check you email or password');
                document.getElementById('email').style.borderBlockColor = "#FF7F7F "
                document.getElementById('pass').style.borderBlockColor = "#FF7F7F "

            }

        }).catch(() => {
            console.log('fail to login');
        })
        // console.log(userlogin,passlogin);
    }

    return (<>

        <a className="text-primary " variant="success" onClick={() => initLoginModal()}  >
            <h7 className="LoginPageHeading">Sign In</h7>
        </a>

        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initLoginModal}>
                <Modal.Title>
                    <h4 className="text-primary m-auto ms-0">  Login </h4>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="row col-12 d-flex">

                    <div className="col-5 mx-3 ms-0">
                        <img className="rounded" src="/img/login.JPG" height="280px" width="240px"></img>
                    </div>

                    <div className="col-5 ms-5">
                        <div className="mb-3 d-flex col-12 ">
                            <input type="email" className="form-control" id="email"
                                onChange={getEmailText} placeholder="Enter your Email" />
                        </div>

                        <div className="mb-3 d-flex col-12 ">
                            <input type="password" className="form-control" id="pass"
                                onChange={getPassText} placeholder="Enter Password" />
                        </div>

                        <div className="mb-3  col-10 ">
                            <Button className="mt-2 m-auto" variant="primary" id="RegisterBtn" onClick={login}>
                                Login
                            </Button>
                        </div>
                    </div>
                    <hr className="mt-3"></hr>

                </div>
            </Modal.Body>

          
        </Modal>

    </>);
};


//export
export default LoginPage;

