const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("event", () =>{
    console.log("an event occured");
})

myEmitter.once("eventOnce", ()=>{
    console.log("an event occured once");
})

// myEmitter.off("eventOff", ()=>{
//     console.log("event closed");
// })

myEmitter.emit("event");
myEmitter.emit("eventOnce")
