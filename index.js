import express from "express";
//for processing data sent through an http request body
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

//Cross-Origin Resource Sharing - http header based mechanism that allows a server to indicate any domain
import cors from "cors";

const app = express();
//will run server on this port
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

//to test if our server is working
app.get("/", (req, res) => res.send("Hello from Express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () => 
  console.log(`Server is listening on port: http://localhost:${port}`)
  );

