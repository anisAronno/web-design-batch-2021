// // alert("Hello")
// console.log('hello');
// document.write("hello");


let x=50;
let y=60;
let result =x-y;

let name='Rahim';  //String
let age = 30; //Intiger

let arr=[20, 30, 40, 50, 'pixel',60, 'anis', 'ershad', 'rahim', 'hello', 220, 30];

//for foreach, for in, for of

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


if(arr.length==9){
    alert("I am From If Block")
}else if(arr.length==10){
    alert("Value is 10")
}else{
    alert("Nothing here")
}



let obj= {name:"Shafique", age:50, ocopasion:"student"}

let testFunc= function(a, b){
    return a-b;
}



let pixel = document.getElementById('test');
pixel.innerHTML=`I am ${name}. I am ${age} Years Old. ${arr[4]}. ${obj.name}. ${testFunc(500,60) }`; 