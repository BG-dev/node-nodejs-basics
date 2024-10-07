import * as fs from "fs";
import * as path from "path";
import { stdout } from "process";

const read = async () => {
  const fileToReadPath = path.join(import.meta.dirname, "files/fileToRead.txt");
  const readStream = fs.createReadStream(fileToReadPath);
  readStream.pipe(process.stdout);

  readStream.on("end", () => {
    process.stdout.write("\n");
  });
};

await read();
