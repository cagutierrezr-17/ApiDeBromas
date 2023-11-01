import mongoose from "mongoose";

const createMongoDBcon = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/jokes")
    .then(() => {
      console.log("Se conecto correctamente a la BD");
    })
    .catch((e) => {
      console.log("Hubo un error" + e);
    });
}

export default createMongoDBcon;