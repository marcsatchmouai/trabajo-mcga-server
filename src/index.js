const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({ path: '.env' });

/* MONGOOSE */
require('./config/db');

/* EXPRESS */
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* BODY-PARSER */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CORS*/
app.use(cors());

/* ROUTES */
const filmRoutes = require('./routes/film');
const userRoutes = require('./routes/user');

app.use('/api/film', filmRoutes());
app.use('/api/user', userRoutes());


const myUser = {
     email: "marcsatchmo@gmail.com",
     password: "123456"
}

app.get("/", (req, res) => {
    res.status(200).send("server working")
})

app.post("/login", (req, res) => {
    console.log(req.body)

    if (!req.body.email) {
        return res.status(400).send({
            success: false,
            message: "Email is required"
        })
    }

    if (!req.body.password) {
        return res.status(400).send({
            success: false,
            message: "Password is required"
        })
    }

    if (req.body.email !== myUser.email || req.body.password !== myUser.password){
        return res.status(401).send({
            success: false,
            message: "User not exist"
        })
    }

    res.status(200).send({
        success: true,
        message: "User logged successfully",
        user: myUser
    })
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Films ~ Online - Running on PORT: ${process.env.PORT || 4000}`);
});