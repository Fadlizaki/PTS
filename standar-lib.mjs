import os from "os"

console.log(os.platform());
console.log(os.arch());
console.table(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.table(os.networkInterfaces());
