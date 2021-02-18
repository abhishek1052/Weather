const express=require('express');
const bodyparser=require("body-parser");
const https=require("https");

const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.listen(3000,function(){
console.log("Server is Running");
});
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
});
app.post("/",function(req,res){
    var city=req.body.city;
    var apikey="d186775a7ac6ebd149d6b4e9e610097d"
    var url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;
    https.get(url,function(response){
        response.on("data",function(data){
            const weather_data=JSON.parse(data);
            console.log(weather_data);
            var temp=weather_data.main.temp;
            res.write("<h1> THE TEMPERATUR IN "+city+" is "+temp+" KELVIN</h1>");
            res.write("<h1> how's YOU !!</h1>");
            res.send()

        })
    })
})
