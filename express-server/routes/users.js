const User = require('../models/user').User;

exports.all = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.status(500).send(err);

    res.status(200).json(users);
  })
}

exports.singl = (req, res) => {
  User.findById(req.param.id, (err, user) => {
    if(err) res.status(500).send(err);

    res.send(200).json(200);
  })
}

exports.post = (req, res) => {
  let user = new User({
    name: req.body.name,
    age: req.body.age
  });

  user.save(err => {
    if (err) res.status(500).send(err);

    res.status(201).json({
      confim: 'success',
      message: 'User created successfully'
    });
  });
}

exports.delete = (req, res) => {
  User.remove(req.param.id, (err) => {
    if (err) res.status(404).send(err);
  })
}