import * as fs from "fs/promises";
import * as path from "path";

const remove = async () => {
  const dirname = import.meta.dirname;
  const fileToRemovePath = path.join(dirname, "/files/fileToRemove.txt");

  try {
    await fs.rm(fileToRemovePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
