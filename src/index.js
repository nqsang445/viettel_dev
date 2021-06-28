const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const jwt = require('jsonwebtoken');
const route = require('./routes');

const db= require('./config/db')


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// express session
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
//connect to DB
db.connect();

app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
// app.use(morgan('combined'));
//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers:{
    sum: (a,b) => a + b,
  }

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded());
route(app);
const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})

