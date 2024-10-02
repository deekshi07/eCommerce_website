import http from "http";
import app from './app/app.mjs';

//creat the server
const PORT = process.env.PORT || 2030;
const server = http.createServer(app) 
server.listen(PORT, console.log(`server is up and running on port ${PORT}`));