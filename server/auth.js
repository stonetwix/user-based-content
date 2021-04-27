function secure(req, res, next) {
    if (req.session.email) {
        next();
    } else {
        res.status(401).json('You must login');
    }
} 

function secureWithRole(role) {
    return [secure, (req, res, next) => {
      if (req.session.role === role) {
        next();
      } else {
          res.status(403).json('You dont have the specific rights to access this route');
      }
    }]
}

module.exports.secure = secure;
module.exports.secureWithRole = secureWithRole;