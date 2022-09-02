import process from "process";

process.addListener("exit",(exitcode) => {
    console.info(`Nodejs exit with code ${exitcode}`);
})


console.info(process.version);
console.info(process.argv);
console.info(process.report);
console.info(process.env);

process.exit(1);

console.info("hello");