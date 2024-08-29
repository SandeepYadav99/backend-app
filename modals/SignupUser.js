import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
const signupSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

signupSchema.methods.generateToken = function () {
    var token = jwt.sign({ uid: this._id }, process.env.KEY);
    return token;
}
const Signup = mongoose.model("users", signupSchema);

export default Signup;