const readline = require('readline');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  read(query, callback) {
    readLine.question(query, callback);
  },

  print(message) {
    console.log(message);
  },

  close() {
    readLine.close();
  },
};

module.exports = Console;