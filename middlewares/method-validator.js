module.exports = function (req, res, next) {
    if (req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
      return res.status(400).json({ message: 'The HTTP method is not valid' });
    }
    next(); // Continuar con la solicitud si es un método HTTP válido
  };
uww-dtfd-uts