import * as zlib from "zlib";
import * as path from "path";
import * as fs from "fs";

const decompress = async () => {
  const fileToCompressPath = path.join(import.meta.dirname, "files/fileToCompress.txt");
  const archivePath = path.join(import.meta.dirname, "files/archive.gz");

  const readStream = fs.createReadStream(archivePath);
  const writeStream = fs.createWriteStream(fileToCompressPath);

  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
