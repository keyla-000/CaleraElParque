const txt = document.querySelector(".texto_animado").children;
txtLen = txt.length;
let index = 0;
const textInTimer = 3000,
        textOutTimer = 2800;

function animateText(){

    for(let i=0; i<txtLen; i++){
        txt[i].classList.remove("text-in","text-out");
    }
    txt[index].classList.add("text-in");

        setTimeout(function(){
            txt[index].classList.add("text-out");
 }, textOutTimer)

setTimeout(function(){
    if(index == txtLen-1){
        index = 0;
    }else{
        index++;
    }
    animateText();
},textInTimer);

}
window.onload = animateText;