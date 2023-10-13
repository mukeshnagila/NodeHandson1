const http = require('http')

const app = http.createServer((req,res) => {

        if(req.url === '/html'){
            res.write("<h3>What is Node.js?</h3></br>");
            res.write("<p>Node.js, commonly known as Node, is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code, enabling the development of scalable and high-performance network applications.</p>");
            res.end()
        }
        else if(req.url === '/json'){
            res.write(JSON.stringify({
                "title":"What is Node.js",
                "description":"Node.js, commonly known as Node, is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code, enabling the development of scalable and high-performance network applications."
               },
            ))
            res.end()
        }
        else if(req.url === "/"){
            res.write("<h1>Hello You Are in Home Page</h1>")
            res.end()
        }
        else{
            res.write("404 page not found");
            res.end();
        }
    })
    app.listen(4000,()=>{
        try{
            console.log("server is running on port no 4000");
        }
        catch (err) {
            console.log('error occured during starting the live server', err)
        }
    });