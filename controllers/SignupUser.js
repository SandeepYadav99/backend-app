import signupSchema from "../modals/SignupUser.js";
import generatePasswordHash from "../utility/utility.js";
const Signup = async(req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = generatePasswordHash(password);
  const existingUser = await signupSchema.findOne({ email });
 
  if (existingUser) {
    return res.status(400).json({ msg: "Email already registered" });
  }
  const user =await signupSchema.create({ name, email, password: hashPassword });

 return res.status(201).json({ msg: "User created successfully", user });
};

export default { Signup };
