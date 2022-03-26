const readlineSync = require("readline-sync");
const fs = require("fs");
const credentialsPath = "./credentials.json";
const spinnies = require("./utils/loader");

async function config() {
  const LOADER = {
    ID: "credentials",
    TEXT: {
      ADD: "Reading credentials",
      SUCCEED: "Credentials checked",
    },
  };

  let email, pass, save;

  if (fs.existsSync(credentialsPath)) {
    spinnies.add(LOADER.ID, { text: LOADER.TEXT.ADD });

    let credentials = JSON.parse(fs.readFileSync(credentialsPath));
    email = credentials.email;
    pass = credentials.pass;

    spinnies.succeed(LOADER.ID, { text: LOADER.TEXT.SUCCEED });
  } else {
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
  }

  return { email, pass };
}

module.exports = config;
