const http = require('http')
const port = 3000

var server = http.createServer(function(req,res){
    res.write('Hello Youtube!')
    res.end()
});

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong!')
    }else{
        console.log('Server is running on port ' + port);
    }
})