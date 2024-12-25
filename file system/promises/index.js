import fs from "fs/promises";

// fs.readFile("./index.txt","utf-8").then((data) =>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// })

// fs.writeFile("./sample.txt","Good morning gugys").then(()=>{
//     console.log("File written ");
// }).catch((err)=>{
//     console.log(err);
// })


// fs.appendFile("./index.txt","\ndid u take bath").then(()=>{
//     console.log("data aaddedd");
// }).catch((err)=>{
//     console.log(err);
    
// })

fs.unlink("yukesh.txt").then(()=>{
    console.log("deleted");
    
}).catch((err)=>{
    console.log(err);
    
})




// async function resolvePromises() {
//   try {
//     let data = await fs.readFile("./sample.txt", "utf-8");
//     await fs.writeFile("./hiii.txt", "Hi da sunni");
//     await fs.appendFile("./yukesh.txt", "\nenna panra saptiya");
//     await fs.unlink("./hiii.txt");

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// resolvePromises();
