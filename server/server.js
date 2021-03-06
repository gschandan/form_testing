const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

const corsOptions = {
  origin: "*"
};

const app = express();
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;
db.mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cws7p.mongodb.net/aztechUsers?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
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

//routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/project.routes')(app);
// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to The World of Aztech.  Be afraid.  Be very very afraid indeed." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
