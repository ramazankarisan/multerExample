const { uploadController } = require('../controllers/uploadController');
const { uploadFiles } = require('../middleware/fileUpload');

const router = require('express').Router();

router.post("/avatar", uploadFiles.single("avatar"), uploadController)

module.exports = router;