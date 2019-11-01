const express = require('express')
const cors = require('cors')
const bodyParser= require ('body-parser')

const myUser = {
    email: "marcsatchmo@gmail.com",
    password: "123456"
}

const app = express()

app.use(bodyParser.json())

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

app.listen(4000, () => {
    console.log("Server working on localhost:4000")
})