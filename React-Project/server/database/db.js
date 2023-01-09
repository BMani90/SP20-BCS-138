import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-app.zviuna8.mongodb.net/?retryWrites=true&w=majority`;
  try {
    //this is a asynchronous function..this will return a Promise
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); //Latest server discovery & monitoring engine
    console.log("Database connected succcesfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
