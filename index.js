const express = require('express')

const app = express()

app.set("port",3000)

app.listen(app.get("port"));

app.get("/",(req,res)=>{
    res.send("Babas")
})

console.log("Server on port", app.get("port"));