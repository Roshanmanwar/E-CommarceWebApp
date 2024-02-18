const regiModel = require("../models/regi.model");

const BasicController = {


    //for a register page
    async Register(req, res) {

        //collect data from body which is send by react component
        let { inputname, inputpass, inputMobile, inputEmail } = req.body;

        //check data if exit or not
        let isuserExists = await regiModel.findOne({
            email: inputEmail
        });


        //save this data in mongodb
        let userRegister = await regiModel({
            userName: inputname,
            mobile: inputMobile,
            pass: inputpass,
            email: inputEmail
        });


        //if the user exit
        if (isuserExists) {
            res.json({
                status: false,
                msg: "exists",
                result: isuserExists,
            });
        } else {
            //if user dosn't exists

            //save the data
            let userRegisterSave = await userRegister.save();

            //if data save then
            if (userRegisterSave) {
                res.json({
                    status: true,
                    msg: "dataSaved"
                });
            } else {
                res.json({
                    status: false,
                    msg: "fail to save data"
                });
            }
        }

    },


    //for a loginpage
    async login(req, res) {
        //collect body data from send react 
        let { inputEmail, inputpass } = req.body;

        //find user  email and pass in our data base i.e. regiModel
        let userFind = await regiModel.findOne({
            email: inputEmail,
            pass: inputpass
        });


        //userFind status
        if (userFind) {
            res.json({
                status: true,
                msg: "userFind",
                result: userFind,

            });
        } else {
            res.json({
                status: false,
                msg: "notFind"
            });
        }


    }

};


//export module
module.exports = BasicController;