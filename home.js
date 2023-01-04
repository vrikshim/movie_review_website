const http=require('http');
const fs=require('fs');
console.log("hello boys");
const hostname="127.0.0.1";
const port="80";
// const kanat=fs.readFileSync('home.html');
// const janat=fs.readFileSync('styles.css')
// console.log(hip)
// var j=document.querySelector('#fname').value;
// const va= document.getElementById('fname');
// console.log(j);
const server=http.createServer(function(req,res){
    fs.readFile("home.html",(error,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end('home.html');
    })
fetch.data('test.html');
})
server.listen(port,hostname,()=>{
    console.log('server is at ',hostname,port);
    });
