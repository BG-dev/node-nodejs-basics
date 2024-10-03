import * as fs from "fs/promises";
import * as path from "path";

const copy = async () => {
  const dirname = import.meta.dirname;
  const sourcePath = path.join(dirname, "/files");
  const destinationPath = path.join(dirname, "/files_copy");
  try {
    await fs.cp(sourcePath, destinationPath, { force: false, errorOnExist: true, recursive: true });
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

await copy();
