const path = require("path");

//Check File
const checkFileType = (file, cb) => {
    //Allowed EXT
    const filetypes = /jpg|png|jpeg|gif/;

    //Check the extension
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    //Check the mime type
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        return cb("Error: File Type Not Supported.");
    }
};

module.exports = {
    checkFileType
};
