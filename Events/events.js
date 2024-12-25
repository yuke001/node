// import Events from 'events'
// console.log(Events);
// EventEmitter: [Circular *1]


import {EventEmitter} from 'events'


class MyClass extends EventEmitter{}

let studentObj = new MyClass()

// observer 1  - parents 

studentObj.on("result",(resultType)=>{
    if(resultType ===  "distinction"){
        console.log("parents - happy");
        
    }else{
        console.log("parents - sad");
    }
})

// observer 2  - friends 
studentObj.on("result",(resultType)=>{
    if(resultType ===  "distinction"){
        console.log("friends - sad");
        
    }else{
        console.log("friends - hppay");
    }
})
// observer 3  - realtives 
studentObj.on("result",(resultType)=>{
    if(resultType ===  "distinction"){
        console.log("relatives - jealous");
        
    }else{
        console.log("ralative -sad but inside happy");
    }
})


studentObj.emit("result","fail")