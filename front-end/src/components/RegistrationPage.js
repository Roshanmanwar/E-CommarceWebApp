import { useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";


const RegistrationPage = () => {

    const [isShow, invokeModal] = useState(false);
    let [inputname, setInputName] = useState();
    let [inputpass, setInputPass] = useState();
    let [inputMobile, setInputMobile] = useState();
    let [inputEmail, setInputEmail] = useState();

    //modal open or close
    const initModal = () => {
        return invokeModal(!isShow);
    }


    //get value from name input text
    const getNameText = (e) => {
        setInputName(e.target.value);
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


    //button click
    //register button
    const Register = () => {
        axios.post('http://localhost:3050/register', { inputname, inputpass, inputEmail, inputMobile }).then((res) => {
            console.log(res.data.msg);
            if (res.data.msg === "exists") {
                alert('Your email is already exists...!')
                document.getElementById('email').value = "";
                document.getElementById('email').style.borderBlockColor = "red";

            } else {
                alert('Your account is created | Now you can login...!');
                document.getElementById('nameText').value = "";
                document.getElementById('passText').value = "";
                document.getElementById('email').value = "";
                document.getElementById('mobile').value = "";
                document.getElementById('email').style.borderBlockColor = "";
            }

        }).catch(() => {
            console.log("fail to load");
        })
    }


    return (<>

        <a className="text-primary " variant="success" onClick={() => initModal()}  >
            <h7 className="RegiPageHeading " >Sign Up</h7>
        </a>

        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}>
                <Modal.Title>
                    <h4 className="text-primary m-auto ms-0">  Create new Account + </h4>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="row d-flex col-12 ">

                    <div className="col-5 ms-0 mx-4">
                        <img className="rounded" src="/img/register.JPG" height="300px" width="220px"></img>
                    </div>

                    <div className="col-5 ms-5 mt-0">

                        <div className="mb-3 d-flex col-12">
                            <input type="text" className="form-control col-5" id="nameText"
                                onChange={getNameText} placeholder="Enter Name" required />
                        </div>

                        <div className="mb-3 d-flex col-12 ">
                            <input type="email" className="form-control col-3" id="email"
                                onChange={getEmailText} placeholder="Enter email id" required />
                        </div>

                        <div className="mb-3 d-flex col-12 ">
                            <input type="text" className="form-control col-3" id="mobile"
                                onChange={getMobileText} placeholder="Enter Mobile number" />
                        </div>


                        <div className="mb-2 d-flex col-12 ">
                            <input type="password" className="form-control col-3" id="passText"
                                onChange={getPassText} placeholder="Enter Password" required />
                        </div>

                        <div className="mb-2 col-10 ms-0 ">
                            <button className="btn  btn-primary ms-0" id="RegisterBtn" variant="primary" onClick={() => Register()}>
                                Register
                            </button>
                        </div>
                    </div>
                    <hr className="mt-4"></hr>

                </div>
            </Modal.Body>

        </Modal>

    </>);
};

//export
export default RegistrationPage;

