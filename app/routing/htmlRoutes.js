const path = require('path')

module.exports=function(app){
    app.get('/home', function(req,res){


        //res.send("this is the splash page")
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get('/survey', function(req,res){


        //res.send("this is the splash page")
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
}