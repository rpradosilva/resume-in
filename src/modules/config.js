const readlineSync = require("readline-sync");
const fs = require("fs");
const credentialsPath = "./credentials.json";
const spinnies = require("./utils/loader");

async function config() {
  let email, pass, save;

  if (fs.existsSync(credentialsPath)) {
    spinnies.add("credentials", { text: "Reading credentials" });

    let credentials = JSON.parse(fs.readFileSync(credentialsPath));
    email = credentials.email;
    pass = credentials.pass;

    spinnies.succeed("credentials", { text: "Credentials checked" });
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
}

module.exports = config;
