const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ msg: 'Todos los campos son obligatorios.' });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: 'El usuario ya está registrado.' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ msg: 'Usuario registrado exitosamente.' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ msg: 'Credenciales inválidas.' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ msg: 'Credenciales inválidas.' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ msg: 'Login exitoso.', token });
};

exports.dashboard = (req, res) => {
  res.json({ msg: 'Bienvenido al dashboard privado.' });
};
