import readLine from "readline";
import process from "process";

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("siapa nama anda ?",(nama) =>{
    console.info(`halo ${nama}`);
    input.close();
});