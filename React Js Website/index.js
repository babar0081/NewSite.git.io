const express = require("express");
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.Port || 4000;

app.listen(PORT, ()=>{
    console.log(`our server is running perfectlly ${PORT}..`)
})