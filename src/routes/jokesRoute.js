import express from "express";
import * as jokesController from "../Controllers/jokesController.js"
const router = express.Router();

router.get("/api/jokes", jokesController.getJoke);
router.get("/api/jokes/:idJoke", jokesController.getJokeById);
router.post("/api/jokes/new", jokesController.createJoke);
router.put("/api/jokes/update/:idJoke", jokesController.updateJokeById);
router.delete("/api/jokes/delete/:idJoke", jokesController.deleteJokeById);

export {router};
