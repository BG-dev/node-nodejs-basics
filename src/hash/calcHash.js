import * as path from "path";
import * as fs from "fs";
import * as crypto from "crypto";

const calculateHash = async () => {
  const fileToCalculateHashForPath = path.join(
    import.meta.dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const readStream = fs.createReadStream(fileToCalculateHashForPath);
  const hash = crypto.createHash("sha256");

  readStream.pipe(hash).on("finish", () => {
    console.log("hash: " + hash.digest("hex"));
  });
};

await calculateHash();
