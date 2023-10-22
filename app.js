/*packages import */
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

/*custom packages import */
const admin = require('./routes/admin')
const shopRouter = require('./routes/shop')
/*Entry Point */
const app = express();
/*MIDDLE WARES */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(admin.router);
app.use(shopRouter);

//configuring static files path

app.use(express.static(path.join(__dirname, 'public')))

//default error page

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'))
})
// port config for express app
app.listen(3000);