import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    //define the structure of your documents within a MongoDB collection
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthdate: { type: Date, required: true },
    profilePicture: { type: String, required: false },
    public_id: { type: String, required: false },
    hometown: { type: Date, required: true },
    travelDates: { type: Date, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
); //store the timestamps of when the document was created and last updated.

const UserModel = mongoose.model("user", userSchema); //creates a model from the schema. Name should be singularized.
//A model is a class with which you construct documents.

export default UserModel;
