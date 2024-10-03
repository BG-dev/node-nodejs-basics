import * as fs from "fs/promises";
import * as path from "path";

const read = async () => {
  const dirname = import.meta.dirname;
  const fileToReadPath = path.join(dirname, "/files/fileToRead.txt");

  try {
    const file = await fs.readFile(fileToReadPath);
    console.log(file.toString());
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
