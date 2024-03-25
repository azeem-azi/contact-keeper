const express = require('express');
const router = express.Router();

// @route   GET api/auth 
// @desc    GET Logged in 
// @access  Private

router.get('/' , (req ,res)=>{
    res.send('Get logged in  ')
});

// @route   GET api/auth 
// @desc  Auth user & get token 
// @access  public

router.post('/' , (req ,res)=>{
    res.send('log in user')
});
module.exports = router;