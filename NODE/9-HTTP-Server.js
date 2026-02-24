//In this we are going to create a simple HTTP server 

// Import built-in http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  res.write("Hello Vedant! This is your first HTTP Server 🚀");
  res.end();
});

// Define port
const PORT = 5000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

