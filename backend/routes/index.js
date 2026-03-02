var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const { processVideoController, getData, getVideo } = require('../controller/indexController');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos')
  },
  filename: (req, file, cb) => {
    let name = file.originalname.replace(/ /g, '+')
    let random = Math.floor(Math.random() * 9000) + 1000
    cb(null, random + name)
  }
})

const fileFilter = (req, file, cb) => {
  const allowedExt = [".mp4", ".mov", ".mkv", ".webm"]

  const allowedMime = [
    "video/mp4",
    "video/quicktime",   // mov
    "video/x-matroska",  // mkv
    "video/webm"
  ]

  try {
    let ext = path.extname(file.originalname).toLowerCase()

    if(!allowedExt.includes(ext)) return cb(new Error("format tidak didukung"))
    if(!allowedMime.includes(file.mimetype)) return cb(new Error("Mime tidak didukung"))
  
    cb(null, true)
    } catch (error) {
    cb(error, false)
  }
}

const upload = multer({storage, fileFilter})

/* GET home page. */
router.get('/', getData);

router.get('/summary/:token', getVideo)

router.post('/video', upload.single('meeting-video'), processVideoController);

module.exports = router;
