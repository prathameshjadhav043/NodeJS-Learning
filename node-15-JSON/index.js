const fs = require('fs');

fs.readFile("new.json", 'utf-8', (err, data) => {
    console.log(data);
    const data1 = JSON.parse(data);
    console.log(data1);
})