import User from "../models/usermodel.js";

//SIGNUP
export const Register = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(500).json({message:"Already exists"});
        }
        const newUser = await User.create({
            name,
            email,
            password
        })
         return res.status(220).json({message:"User created successefully", success: true, newUser});

    } catch (error) {
         return res.status(600).json({message:"Internal Server Error"});
        
    }
}

//LOGIN
export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({
      message: "Login Successfully",
      userId: user._id, // 👈 Return userId
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserDetails = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};