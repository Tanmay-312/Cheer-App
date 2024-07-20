const express = require('express')
const registerUser = require('../controller/registerUser.js')
const checkEmail = require('../controller/checkEmail.js')
const checkPassword = require('../controller/checkPassword.js')
const userDetails = require('../controller/userDetails.js')
const logout = require('../controller/logout.js')
const updateUserDetails = require('../controller/updateUserDetails.js')
const searchUser = require('../controller/searchUser.js')

const router = express.Router()

//create api endpoints
router.post('/register',registerUser)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/user-details',userDetails)
router.get('/logout',logout)
router.post('/update-user',updateUserDetails)
router.post("/search-user",searchUser)

module.exports = router
