import EventEmitter from "events";

class Myclass extends EventEmitter{}

let obj = new Myclass();

obj.on("yuke",()=>{
    console.log("yuke");
})
obj.emit("yuke");