import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello",(nama)=>{
    console.info(`hello ${nama}`);
})
emitter.addListener("hello",(nama)=>{
    console.info(`halo ${nama}`);
})

emitter.emit("hello","fadli")