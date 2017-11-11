const fs = require("fs")
const express = require("express")


var app = express();

app.get("/", function(req, res){
    texts = fs.readdirSync("texts/")
    res.send(texts)
})

app.get("/:textname", function(req, res){
    if (fs.existsSync("texts/" + req.params.textname)) {
        res.send("")
    } else {
        var textContent = fs.readFileSync("texts/" + req.params.textname)
    }
    
    res.send(textContent)
})
