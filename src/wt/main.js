import * as os from "os";
import * as path from "path";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const workerFilePath = path.join(import.meta.dirname, "worker.js");
  const cpus = os.cpus().length;

  const workers = [];
  for (let i = 0; i < cpus; i++) {
    const worker = new Promise((resolve) => {
      const worker = new Worker(workerFilePath, { workerData: i + 10 });
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
    workers.push(worker);
  }

  const results = await Promise.all(workers);

  console.log(results);
};

await performCalculations();
