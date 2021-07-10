const express = require('express')

const app = express()
const port = process.env.PORT || 5000
const users = [{name: "Mela", password: "PokeNews"}, {name:"Dernier Cri", password:"SpecialUser"}];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const user = users.find(user => (user.name === req.body.name) && (user.password === req.body.password));
    if (!user) {
        res.status(401).send('Wrong name or password')
    }
    else if (user) {
        res.status(200).send({message: 'Logged in', username: user.name})
    }
})

app.listen(port, () => {
    console.log(`Listening on port : ${port}`)
})