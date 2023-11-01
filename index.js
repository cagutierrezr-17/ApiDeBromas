import express from "express";
import * as jokesRoute from "./src/routes/jokesRoute.js"
import createMongoDBcon from "./src/config/mongooseConfig.js";


const app = express();

createMongoDBcon();

app.use(express.json());
app.use(jokesRoute.router);

app.listen(8000);

