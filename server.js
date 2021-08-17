const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const Role = db.role;
db.mongoose
    .connect('',{
        useNewURLParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("successfully connected");
        initial();
    })
    .catch(err => {
        console.error("unable to connect",err);
        process.exit();
    })

function initial () {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
          new Role({
            name: "user"
            }).save(err => {
            if (err) {
              console.log("error", err);
            }
               console.log("added 'user' to roles collection");
          });
          new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
              console.log("added 'admin' to roles collection");
          });
        }
      });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The World of Aztech.  Be afraid.  Be very very afraid indeed." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
