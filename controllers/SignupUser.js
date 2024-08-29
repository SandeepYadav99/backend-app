import signupSchema from "../modals/SignupUser.js";
const Signup = (req, res) => {
  const { name, email, password } = req.body;

  const user =  signupSchema.create({ name, email, password });

  res.status(201).json({ msg: "User created successfully", user });

};


export default { Signup };
