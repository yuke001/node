import fs from 'fs'

fs.readFile("./hi.txt","utf-8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    
} )
