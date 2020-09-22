let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world';
//alert("hanasdp")
document.querySelector('html').onclick = function()
{
    alert("给爷爪巴");
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUseName(){
    let myName = prompt('请输入你的名字.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = myName + '给爷爪巴' ;
}
if(!localStorage.getItem('name'))
{
    setUseName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '给爷爪巴';
}
myButton.onclick = function(){
    setUseName();
};