const express = require("express");
var cors=require('cors');


const app = express();
const connectDB = require("./config/db");
// Connect Database
//connectDB();

// Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

//rutas

/*
app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("login")
})
*/
app.use(cors({origin:true,credentials: true}));
app.use("/landing", require("./api/routes/topic"));
app.use("/login", require("./api/routes/user"));

const PORT = process.env.PORT || 8000; //port buscará un ambiente de variable PORT, de lo contrario usa la establecida por defecto.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
