import http from 'http';
const port = 3000;

const myserver = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('My First Backend Server');
});

myserver.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
