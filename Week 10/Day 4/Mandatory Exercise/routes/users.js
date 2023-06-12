const express = require('express');
const router = express.Router();

const {_insertLogin, 
    _insertRegister,
    _getAllProfiles, 
    _getAllLogin,
    _getUsernameLogin 
} = require('../controllers/users.js')

router.post('/login',_insertLogin)
router.post('/register',_insertRegister)
router.get('/register/', _getAllProfiles)
router.get('/login/', _getAllLogin)
router.post('/login/', _getUsernameLogin)

module.exports = {
    router
}
