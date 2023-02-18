const express = require('express')
const router = express.Router()
const {genereateImage} = require('../controller/openaiController')

router.post('/generaterimage',genereateImage);

module.exports= router