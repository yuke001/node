// import fs from 'fs'

// Promise.resolve().then(() => {
//   console.log("Promise cb 1")
// })

// process.nextTick(() => {
//   console.log("NextTick cb 1")
// });

// setTimeout(()=>{
//     console.log("this is cb for timer queue");
    
// })

// fs.readFile("./index.js", ()=>{
//     console.log("This is cb for i/o queue");
    
// })

// setImmediate(()=>{
//     console.log("This is cb for check queue");
    
// })


//  https://www.builder.io/blog/NodeJS-visualizing-nextTick-and-promise-queues



const fs=require("fs")
let readStream=fs.createReadStream(__filename,"utf-8")


process.nextTick(()=>{
    console.log("this is cb for nextTick queue"); 
})
Promise.resolve().then(()=>{
    console.log("this is cb for promise queue");
})

setTimeout(()=>{
    console.log("this is cb for timer queue");
},0)

fs.readFile("./index.js",()=>{
    console.log("this is cb 1 for for i/o queue");
    process.nextTick(()=>{
        console.log("this is nested cb for nextTick queue"); 
    })

})
fs.readFile("./index.js",()=>{
    console.log("this is cb 2 for for i/o queue");
    
})

setImmediate(()=>{
    console.log("this is cb for check queue");
})


readStream.on("close",()=>{
    console.log("this is close queue callback");
})

readStream.close()

