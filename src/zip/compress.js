import * as zlib from "zlib";
import * as path from "path";
import * as fs from "fs";

const compress = async () => {
  const fileToCompressPath = path.join(import.meta.dirname, "files/fileToCompress.txt");
  const archivePath = path.join(import.meta.dirname, "files/archive.gz");

  const readStream = fs.createReadStream(fileToCompressPath);
  const writeStream = fs.createWriteStream(archivePath);

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
