const {User} = require("../models/User");

exports.createUser = async function (req, res) {
    const user = new User(req.body);
    try {
        const doc = await user.save();
        res.status(201).json(doc);
        console.log(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};
exports.loginUser = async function (req, res) {
    try {
        const user = await User.findOne({email: req.body.email}).exec();
        console.log({user});
        if (!user) {
            res.status(401).json({message: "No Such User Exists"});
        } else if (user.password === req.body.password) {
            res.status(200).json({id: user.id, email: user.email, name: user.name, addresses: user.addresses});
        } else {
            res.status(401).json({message: "Invalid email or password"});
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

// exports.loginUser = async (req, res) => {
//     try {
//       const user = await User.findOne(
//         { email: req.body.email },
//       ).exec();
//       // TODO: this is just temporary, we will use strong password auth
//       console.log({user})
//       if (!user) {
//         res.status(401).json({ message: 'no such user email' });
//       } else if (user.password === req.body.password) {
//           // TODO: We will make addresses independent of login
//         res.status(200).json({id:user.id, role:user.role});
//       } else {
//         res.status(401).json({ message: 'invalid credentials' });
//       }
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   };
