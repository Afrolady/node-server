// router.js
const express = require('express');
const router = express.Router();
const users = require('./users'); 
const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT en rutas protegidas
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: ' The Token is not given' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Token' });
    }
    req.user = decoded;
    next();
  });
}

// Ruta para autenticación y creación de JWT
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Incorrect Credencials' });
  }

  // Crear un token JWT
  const token = jwt.sign({ username, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Ruta protegida
router.get('/protected', verifyToken, (req, res) => {
  // La ruta protegida solo será accesible si el token es válido
  const userRol = req.user.rol;

  if (userRol === 'admin') {
    res.json({ message: `Protected Route, the user has been authenticated as an administrador (${req.user.username})`});
  } else if (userRol === 'user') {
    res.json({ message: `Protected Route, the user has been authenticated as an user (${req.user.username})`});
  } else {
    res.status(401).json({ message: 'Access denied' });
  }
});

module.exports = router;