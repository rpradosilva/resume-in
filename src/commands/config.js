const readlineSync = require("readline-sync");

module.exports = async () => {
  console.log("Login LinkedIn -------------------------");
  let email, pass;

  email = readlineSync.questionEMail("E-mail: ");
  pass = readlineSync.question("Password: ", { hideEchoBack: true });

  return { email, pass };
};
