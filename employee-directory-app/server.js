const path = require('path');
const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.listen(PORT, function(){
    console.log("App running on port " + PORT);
}); 