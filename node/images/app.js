const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const { checkFileType } = require("./utilities");

//Initialize App Instance
const app = express();

//EJS - Set the View Engine
app.set("view engine", "ejs");

//Set Storage Engine
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    //This is where we would determine Creative Name if performing operation on backend
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});

//Set Upload - Single - Name of Input
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).array("myImages");

//Public Folder
app.use(express.static("./public"));

//Render the Initial View
app.get("/", (req, res, next) => {
    //Render a view using EJS
    res.render("index");
});

//Deal with File Upload POST Request
app.post("/upload", (req, res, next) => {
    upload(req, res, err => {
        if (err) {
            res.render("index", {
                msg: err
            });
        } else {
            if (req.files) {
                let files = req.files.map(file => {
                    return `uploads/${file.filename}`;
                });

                res.render("index", {
                    msg: "Files Uploaded",
                    files: files
                });
            } else if (req.file == undefined && req.files == undefined) {
                res.render("index", {
                    msg: "Error: No File(s) Selected"
                });
            }
        }
        // console.log(req.file); //Multer File Object Representing Image
        // console.log(req.file.fieldname); //Field Name
        // console.log(req.file.originalname); //Original Name
        // console.log(req.file.encoding); //Encoding
        // console.log(req.file.mimetype); //Mime Type
        // console.log(req.file.destination); //Destination
        // console.log(req.file.filename); //File Name
        // console.log(req.file.path); //path to File
    });
});

//Set server to listen on port
app.listen(process.env.PORT || 3001, () =>
    console.log("Server listening on port " + `${process.env.PORT || 3001}`)
);
