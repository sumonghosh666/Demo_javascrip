var fs =require('fs');
var http =require('http');


var server=http.createServer(function(req,res){

    if (req.url="/"){
        // sync
        

        let mydata=fs.readFileSync('./index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
            res.write(mydata);
            res.end();
        

    }


});
server.listen(5050);
console.log("server run success")
