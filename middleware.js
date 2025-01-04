const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization'); 
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
   
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const decoded = jwt.verify(tokenParts[1], process.env.JWT_SECRET); 
    req.user = decoded; 
    console.log('Decoded User:', req.user);
    next(); 
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
};

module.exports = { authenticate, authorize };