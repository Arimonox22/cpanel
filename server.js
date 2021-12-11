const express = require('express');
const app = express();
const port = 6000;

app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`Blockchain at http://localhost:${port}`)
});
