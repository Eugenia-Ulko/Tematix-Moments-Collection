const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Angelina Jolie',
    email: 'brad.pitt@hotmail.com',
    password: bcrypt.hashSync('123456', 10)
  },

  {
    name: 'Eugenia Ulko',
    email: 'eugenia.ulko@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isdmin: true
  },

  {
    name: 'Donald Trump',
    email: 'donald.trump@gmail.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

module.exports = users;
