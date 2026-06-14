const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Test");
});

server.listen(4005, () => {
  console.log("Test server running on port 4005");
});
