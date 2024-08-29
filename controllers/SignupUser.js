import signupSchema from "../modals/SignupUser.js";
import generatePasswordHash from "../utility/utility.js";
const Signup = (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = generatePasswordHash(password);
  const user = signupSchema.create({ name, email, password: hashPassword });

  res.status(201).json({ msg: "User created successfully", user });
};

export default { Signup };
