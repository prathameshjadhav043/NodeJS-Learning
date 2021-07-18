const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync("index.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperatuer = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperatuer = temperatuer.replace("{%tempmin%}", orgVal.main.temp_min);
    temperatuer = temperatuer.replace("{%tempmax%}", orgVal.main.temp_max);
    temperatuer = temperatuer.replace("{%location%}", orgVal.name);
    temperatuer = temperatuer.replace("{%country%}", orgVal.sys.country);
    temperatuer = temperatuer.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperatuer;
}

const server = http.createServer((req, res) => {
    if (req.url = '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=53721b38b478f40f98c36f6c1d6d08b6")
            .on('data', (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
})

server.listen(3000, "127.0.0.1");