const readlineSync = require("readline-sync");
const credentialsPath = "./credentials.json";

module.exports = async (fs) => {
  let email, pass, save;

  if (fs.existsSync(credentialsPath)) {
    console.log(">> Reading credentials...");

    let credentials = JSON.parse(fs.readFileSync(credentialsPath));

    email = credentials.email;
    pass = credentials.pass;
  } else {
    console.log("LinkedIn Login -------------------------");

    email = readlineSync.questionEMail("E-mail: ");
    pass = readlineSync.question("Password: ", { hideEchoBack: true });
    save = readlineSync.question("Save credentials? (y/n)", {
      defaultInput: "y",
      limit: ["y", "n"],
      trueValue: "y",
      falseValue: "n",
    });

    if (save == true) {
      let data = JSON.stringify({ email, pass });
      fs.writeFileSync(credentialsPath, data, "utf-8");
    }

    console.log("----------------------------------------");
    console.log(" ");
  }

  return { email, pass };
};
