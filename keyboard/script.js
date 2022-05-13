let key = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

for(let k of key){
k.onclick = function(){
    display.textContent += k.textContent;
  }
}


clear.onclick = function(evt){
  evt.preventDefault();
  display.textContent = '';
}