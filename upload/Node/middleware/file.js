const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, "images");
  },
  filename: (req, file, cb) => {
      console.log(file);
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, Date.now() + "." + ext);
  }
});


module.exports = multer({ storage: storage }).single("imagePath");
