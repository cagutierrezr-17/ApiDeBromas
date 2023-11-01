import modelJokes from "../models/jokesModel.js"

const getJoke = async (req, res) => {
	let jokesList = await modelJokes.find();
	res.status(200).json(jokesList);
}

const getJokeById = async (req, res) => {
	let id = req.params.idJoke;
	let jokeById = await modelJokes.findById(id);
	res.status(200).json(jokeById);
}

const createJoke = async (req, res) => {
	let newDataJoke = req.body
	let newJoke = await modelJokes.create(newDataJoke);
	res.status(200).json(newJoke)
}

const updateJokeById = async (req, res) => {
	let id = req.params.idJoke;
	let jokeData = req.body

	let jokeUpdate = await modelJokes.findByIdAndUpdate(id, jokeData);

	res.status(200).json(jokeUpdate);
}

const deleteJokeById = async (req, res) => {
	let id = req.params.idJoke;
	let jokeDelete = await modelJokes.findByIdAndDelete(id);
	console.log(jokeDelete);
	res.json("Se elimino un chiste");
}

export { getJoke, getJokeById, createJoke, updateJokeById, deleteJokeById };