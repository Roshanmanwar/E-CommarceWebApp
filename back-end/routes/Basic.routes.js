const BasicController = require('../controllers/Basic.controller');
const BasicRouter = require("express").Router();



//Post Method

//for user register
BasicRouter.post('/register', BasicController.Register);

//for user login
BasicRouter.post('/login',BasicController.login);



//export
module.exports = BasicRouter;