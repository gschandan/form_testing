const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

const corsOptions = {
  origin: "*"
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
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
const AuthRoute = require('./routes/auth.routes');
const UserRoute = require('./routes/user.routes');
const ProjectRoute = require('./routes/project.routes');

app
  .use('/api/auth', AuthRoute)
  .use('/api/test', UserRoute)
  .use('/api/project', ProjectRoute)
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
