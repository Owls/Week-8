const path = require("path");
const file = require("fs");

file.access(
  path.join(__dirname, "myNewFolderII"),
  file.constants.F_OK,
  (err) => {
    if (err) {
      file.mkdir(path.join(__dirname, "myNewFolderII"), (err) => {
        if (err) {
          console.log("Whoops!");
        } else {
          console.log("Success! File Created.");
        }
      });
    } else {
      console.log("Success!");
    }
  }
);

file.access(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  file.constants.F_OK,
  (err) => {
    if (err) {
      //Create file
      file.appendFile(
        path.join(__dirname, "myNewFolder", "hello.txt"),
        "Hello World!",
        "utf8",
        (err) => {
          if (err) {
            console.log("File not created.");
          } else {
            console.log("Woo!");
          }
        }
      );
    } else {
      console.log("File accessable!");
    }
  }
);

file.readFile(
  path.join(__dirname, "myNewFolder", "hello.txt"),
  "utf8",
  (err, print) => {
    if (err) {
      console.log("Failure!");
    } else {
      console.log(print);
    }
  }
);
