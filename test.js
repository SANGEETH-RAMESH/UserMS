function* Sangee(){
    yield console.log("dfkdf");
    
}

const Sangeeth=Sangee()
Sangeeth.next()
// console.log(Sangeeth.next().value

// const user={
//     firstname:"Sangeeth",
//     lastname:"Ramesh"
// }

// const {firstname,lastname}=user

// console.log(firstname)
// console.log(lastname)

// const sangee=new Promise((resolve,reject)=>{
//     let a=10;
//     if(a%2==0){
//         resolve("even numbers");
//     }
//     else{
//         reject("odd numbers")
//     }
// })

// sangee  
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })


// (function(){
//     console.log("Hello")
// })();

// const express=require('express')

// const app=express();

// app.post('/',(req,res)=>{
//     res.write('Hello')
//     res.end()
// })
// app.listen(3000,()=>{
//     console.log("Server is starting")
// })

// const event=require('express');

// const fs=require('fs')
// const dateandtime=new Date();
// const result=dateandtime.toString();

// fs.writeFile('example.txt',result,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Hello")
//     }
// })

const name={
    firstname:"Sangeeth",
    lastname:"Ramesh"
}
let Name=((function(){
    console.log(this.firstname+" "+this.lastname)
})
)
Name.bind(name)
