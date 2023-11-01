import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema(
	{
		setup: String,
		punchline: String
	}
);

const modelJokes = mongoose.model("jokes", jokeSchema);

export default modelJokes;