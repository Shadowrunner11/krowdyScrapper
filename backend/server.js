const { default: mongoose } = require('mongoose');
var restify = require('restify');
const {  Product } = require('./model/Product');



//crear el servidor
var server = restify.createServer();

server.use(restify.plugins.bodyParser())

server.listen(8080, function() {
    //mongoose.set('useFindAndModify', false)
    mongoose.connect('mongodb://ubrktzke1wrpdfcvt3eh:OSEyZ4y3qQxb53mbiQ9w@btzxfvryki1mxpa-mongodb.services.clever-cloud.com:27017/btzxfvryki1mxpa' ,
                {useNewUrlParser: true }, 
        function (err) {
    
            if (err) throw err;
            console.log('Successfully connected');
        }
    )
    //console.log('%s listening at %s', server.name, server.url);
});
const db = mongoose.connection;

db.on('err', err=>console.log());

db.once('open', ()=>{
    require('./routes/product')(server);
    console.log(`Server started on port 8080`)
})