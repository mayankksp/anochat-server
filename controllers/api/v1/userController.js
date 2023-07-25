// anochat-server/controllers/api/v1/userController.js
const User = require('../../../models/User');
const generateToken = require('../../../utils/jwt');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if user exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // create a new user
    user = new User({ username, password });

    await user.save();

    const token = await generateToken(user.id);

    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};