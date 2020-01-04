const express = require("express")
const router = express.Router()

router.get("/kkk", (req, res) => {
  res.send("kkk")
})

module.exports = router
