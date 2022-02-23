const router = require("express").Router();
const { empty } = require("statuses");
const userModel = require("../Models/userModel");


//check phone//
router.post('/check/phone', async (req, res) => {
    try {
        var { phonenumber } = req.body;
        if (phonenumber == null || phonenumber == empty || phonenumber == undefined) {
            res.status(200).json({
                status: false,
                msg: "Phone number not provided"
            });
            return;
        }
        var data = await userModel.findOne({ mobileNumber: phonenumber, status: 'active' })
        if (data) {
            res.status(200).json({
                status: true,
                exists: true,
                data: data,
                msg: "User found"
            });
            return;
        }
        else {
            res.status(200).json({
                status: false,
                exists: false,
                msg: "User not found please register"
            });
            return;
        }
    } catch {
        res.status(500).json({
            status: false,
            msg: "internal server error"
        });
        return;
    }
})


// new Registration //
router.post('/user/registration', async (req, res) => {
    try {
        var {firstname,lastname}=req.body;
    } catch {
        res.status(500).json({
            status: false,
            msg: "internal server error"
        });
    }
})