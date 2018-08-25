const express=require("express");
const expressStatic=require("express-static");



var server = express();
server.listen(80);


server.use(expressStatic("./www"));