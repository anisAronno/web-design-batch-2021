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


let imgId=document.getElementById('imgId')
let btnImg=document.getElementById('btnImg')

btnImg.addEventListener("click", function(){
    imgId.src="./assets/images/download.jfif"
})

