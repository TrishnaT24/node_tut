const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('welcome to home pg')
    }
    else if(req.url==='/about')
    {
        res.end('here is our short history')
    }
    else{
        res.end(`
        <h1>oops!</h1>
        <p>no page found</p>
        <a href="/">back home</a>`);
    }

})

server.listen(5000)