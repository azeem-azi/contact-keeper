const express = require('express');
const app = express();

app.get('/' , (req , res) => res.json('Hello world'));

 
// DEFINE ROUTS 

app.use('/api/users' , require('./routes/users'));
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/contacts' , require('./routes/contacts'));


const PORT = process.env.PORT || 5000;
app.listen(PORT ,()=>console.log(`Server is runnging on port ${PORT}`));