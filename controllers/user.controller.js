exports.allAccess = (req, res) => {
    res.status(200).send("Public Content way-hey.");
  };
  
  exports.userContent = (req, res) => {
    res.status(200).send("User Content but only if you log in.");
  };
  
  exports.adminContent = (req, res) => {
    res.status(200).send("Admin Content. Oh The Power");
  };