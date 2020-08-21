import mongoose from 'mongoose'

import GradeModel from "./grades.js";


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const grades = GradeModel(mongoose)

// Create cached connection variable
const connection = {};

const DB_URI = 'mongodb+srv://reinildo:rei1010@clusterrei.sl28d.gcp.mongodb.net/desafio?retryWrites=true&w=majority';

const connectDb = async () => {
  if (connection.isConnected) {
    // use cached connection when available
    return;
  }
  try {
    const dbConnection = await mongoose.connect(DB_URI, options);
    connection.isConnected = dbConnection.connections[0].readyState;
  } catch (err) {
    console.log(`error connecting to db ${err.message || err}`);
  }
};

export { connectDb, grades };