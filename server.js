const  express = require('express') ;
 const app =express();
 //const port = 4000 ;
 /************************** */
 // Middleware pour vérifier les heures de travail
const workHoursMiddleware = (req, res, next) => {
    const currentTime = new Date();
    const day = currentTime.getDay();
    const hour = currentTime.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.status(403).send('L\'application est uniquement disponible pendant les heures de travail.');
    }
};
app.use (workHoursMiddleware)
 /******************************* */
app. use(express.static(__dirname+"/views"));
/***************************** */
app.get('/', function(req, res){

    //res.render('index') ;
    res.sendFile(__dirname+"/views/home.html")

}) ;
app.get('/contact', function(req, res){

    //res.render('index') ;
    res.sendFile(__dirname+"/views/contact.html")

}) ;
app.get('/services', function(req, res){

    //res.render('index') ;
    res.sendFile(__dirname+"/views/services.html")

}) ;
app.listen(4000)