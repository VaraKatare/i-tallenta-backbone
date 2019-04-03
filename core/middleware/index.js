const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const router = express.Router()

router.use(helmet())
router.use(cors({
  origin: true
}))
router.use(express.json())
router.use(express.urlencoded(
  {
    extended: true
  }
))

module.exports = router
