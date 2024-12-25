import fs from "fs";

// readStream - stream which used to read the data from

let readStream = fs.createReadStream("./demo.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

// readStream.on("data", (chunk) => {
//     console.log(chunk);
// });

let writeStrean = fs.createWriteStream("./index.txt");
readStream.on("data", (chunk) => {
  console.log(chunk);
  writeStrean.write(chunk);
});
