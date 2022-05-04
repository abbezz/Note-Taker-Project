const express = require('express')
const { futimesSync } = require('fs')

const router = express.Router()

const path = require('path')


router.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
});

router.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
})



















module.exports = router