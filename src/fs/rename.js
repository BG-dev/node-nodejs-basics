import * as fs from "fs/promises";
import * as path from "path";

const rename = async () => {
  const dirname = import.meta.dirname;
  const oldPath = path.join(dirname, "/files/wrongFilename.txt");
  const newPath = path.join(dirname, "/files/properFilename.md");

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
