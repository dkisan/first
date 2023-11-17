const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res, next) => {
    res.send('<h1>Group Chat App</h1>')
})

router.get('/login', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/chat" method="get"><input type="text" id="username" name="username" placeholder="Username"><button type="submit">Login</button></form>')
})

router.post('/chat', (req, res, next) => {
    fs.appendFile('groupchat.txt', `${req.body.username}:${req.body.msg}`, err => {
        if (!err) res.redirect('/chat')
    })
})

router.get('/chat', (req, res, next) => {
    const s = fs.readFileSync('groupchat.txt').toString()
    res.send(`<p>${s}</p><form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/chat" method="post"><input type="text" id="username" name="username" hidden> <input type="text" name="msg"><button type="submit">Send</button></form>`)
})




module.exports = router