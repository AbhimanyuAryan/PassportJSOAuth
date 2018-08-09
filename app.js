const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// setup view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
    res.render('home');
})

// set up routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
})
