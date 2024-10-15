import { fork } from "child_process";
import * as path from "path";

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(import.meta.dirname, "files/script.js");

  const childProcess = fork(scriptPath, args);

  childProcess.on("message", (data) => {
    console.log("Child process message: " + data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someTest", "mem", "kek"]);
