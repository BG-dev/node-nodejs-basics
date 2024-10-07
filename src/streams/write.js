import * as fs from "fs";
import * as path from "path";

const write = async () => {
  const fileToWritePath = path.join(import.meta.dirname, "files/fileToWrite.txt");
  const writeStream = fs.createWriteStream(fileToWritePath);

  process.stdin.pipe(writeStream);
};

await write();
