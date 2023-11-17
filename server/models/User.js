import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  providerName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  facilityName: {
    type: String,
    required: true,
  },
  patient: {
    type: Array,
    default: [],
  },
  picturePath: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
