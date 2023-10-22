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
//configuring templating engine to be used by express app.

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
//default error page

app.use((req, res) => {
    //res.sendFile(path.join(__dirname, 'views', 'error.html'))
    res.render('error', { docTitle: "Error", error: "Page Not Found" })
})
// port config for express app
app.listen(3000);