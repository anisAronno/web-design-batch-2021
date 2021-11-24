let testId = document.getElementById('test')
let paraId = document.getElementById('para')
console.log(testId);
paraId.innerHTML="<b>I am From JS......</b>"


let cls = document.getElementsByClassName("cls")
for (let i = 0; i < cls.length; i++) {
    cls[i].style.color = "blue";
}


let testExtraId = document.querySelector(".cls")
console.log(testExtraId);

let btnId = document.getElementById("btn")
let inpId=document.getElementById("inp");
let hdId=document.getElementById("hd");

inpId.addEventListener("keypress", function() {
    hdId.innerHTML=inpId.value
})



btnId.addEventListener('mouseover', function () {
    paraId.style.color = "red"
    paraId.style.backgroundColor = "blue"
    paraId.innerHTML="Mouse Over"
})

btnId.addEventListener('mouseout', function () {
    paraId.style.color = "blue"
    paraId.style.backgroundColor = "red"
    paraId.innerHTML="Mouse Out"

})


// let imgId=document.getElementById('imgId')
// let btnImg=document.getElementById('btnImg')

// btnImg.addEventListener("click", function(){
//     imgId.src="./assets/images/download.jfif"
// })

let imgId=$('#imgId')
let btnImg=$('#btnImg')
let btnImg2=$('#btnImg2')
let testHeading=$('#testHeading')

btnImg.click(function(){ 
    imgId.attr('src', "./assets/images/download.jfif")
    testHeading.hide(2000)
})

btnImg2.click(function(){
    imgId.attr('src', "./assets/images/tree-276014_960_720.jpg")
    testHeading.show(3000)
})


let pId=$('#pId')
let fId=$('#fId')
let pBtn=$('#pBtn') 
fId.submit(function(event){
    event.preventDefault() 
    let nameId=$('#nameId').val();
    if(nameId.length==0){
            $('#inpId').html("Name is Empty")
            $('#inpId').css('color', 'red')
    }else{
        pId.text(nameId) 
    }
})

