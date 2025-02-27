const express = require('express');
const router = express.Router();

// @route   GEt api/contacts
// @desc    Get all user contacts 
// @access  Private 

router.get('/' , (req ,res)=>{
    res.send(' Get all  contacts ')
});


// @route   POST api/contacts
// @desc    Add new contacts 
// @access  Private 

router.post('/' , (req ,res)=>{
    res.send('Add contact ')
});

// @route   PUT api/contacts
// @desc    Update  contacts 
// @access  Private 

router.put('/:id' , (req ,res)=>{
    res.send('update contact ')
});
// @route   DELETE api/contacts/:id
// @desc    Delete  contact 
// @access  Private 

router.delete('/:id' , (req ,res)=>{
    res.send('delete a contact')
});


module.exports = router;