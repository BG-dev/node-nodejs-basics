import * as fs from "fs/promises";
import * as path from "path";

const list = async () => {
  const dirname = import.meta.dirname;
  const filesPath = path.join(dirname, "/files");

  try {
    const files = await fs.readdir(filesPath);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
