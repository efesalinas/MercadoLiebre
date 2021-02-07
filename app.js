const express = require ("express");
const { parse } = require("path");
const app = express();
const path = require("path");
const publicPath = path.resolve("public");
const bodyParser = require ("body-parser");
app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en puerto 3000"));
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended:true}));



//Editar esto para todas las rutas indicadas
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
});

app.post("/register", (req, res) => {
    res.send(req.body);
});

