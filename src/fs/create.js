import * as fs from "fs/promises";
import * as path from "path";

const create = async () => {
  const dirname = import.meta.dirname;
  const freshFilePath = path.join(dirname, "files/fresh.txt");
  try {
    await fs.writeFile(freshFilePath, "I am fresh and young", { flag: "wx" });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
